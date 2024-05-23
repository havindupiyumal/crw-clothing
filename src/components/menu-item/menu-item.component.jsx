import "./menu-item.styles.scss";

export const MenuItem = ({ category: { title, imageUrl } }) => {
  return (
    <div className="menu-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="menu-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
