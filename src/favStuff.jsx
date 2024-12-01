import dinoImage from '../src/assets/dinosaur.png';

export function FavPic() {
    return <img className='dino-image' src={dinoImage} alt="dino"/>
}

export function FavFood() {
    return (
    <div>
        <h1>My Fav Food</h1>

        <p>My fav food is gravy by the pint.</p>

</div>
) }
