import "./SingleCard.css";
export default function SingleCard({ card, handleChoice }) {
    const handleClick = () => {
        handleChoice(card);
    };

    return (
        <div>
            <div className="card" key={card.id}>
                <div>
                    <img className="font" src={card.src} alt="card front" />
                    <img
                        className="back"
                        src="/img/cover.png"
                        onClick={handleClick}
                        alt="card back"
                    />
                </div>
            </div>
        </div>
    );
}
