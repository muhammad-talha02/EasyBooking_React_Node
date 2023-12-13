interface IPropertyCard {
  item: {
    name: string;
    city: string;
    cheapestPrice: number;
    rating: number;
  };
}

const PropertyCard = ({ item }: IPropertyCard) => {
  return (
    <div className="card flex-1 flex flex-col">
      <img
        src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1560&q=80"
        className="card-img w-full"
      />
      <div className="cardName font-bold">{item.name}</div>
      <div className="cardCity font-[300]">{item.city}</div>
      <div className="cardPrice font-semibold">
        Starting from {item.cheapestPrice} AED
      </div>
      {
        item?.rating &&
      <div className="cardRating">
        <button className="text-white bg-[--theme] px-1 rounded-sm mr-5">
          {item?.rating}
        </button>
        <span className="font-[500]">Excellent</span>
      </div>
      }
    </div>
  );
};

export default PropertyCard;
