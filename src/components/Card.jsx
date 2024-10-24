const Card = ({ title, image, price, promo }) => {
  console.log(promo);
  const style = {
    backgroundColor: promo ? "green" : "red",
    minWidth: 400,
    minHeight: 400,
    borderRadius: 10,
    padding: 10,
    display:"flex",
    flexDirection:"column",
   
  };
  return (
    <div style={style}>
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, at
      
      </p>
      <p>{price}</p>

      <img src={image} alt={title} style={{ height: 200, width: 200 }} />
    </div>
  );
};

export default Card;
