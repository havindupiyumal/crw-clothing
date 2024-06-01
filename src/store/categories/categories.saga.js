import { all, call, takeLatest, put } from "redux-saga/effects";
import { getProductsAndCategories } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
  fetchCategoriesStart,
} from "./categories.reducer";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getProductsAndCategories);
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(fetchCategoriesStart, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
