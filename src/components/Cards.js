import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Chek aut themes EPIC DEestinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Explorer the hiden woterfall deep inside the Amasson Jungle"
                        label='Adventure'
                        path='/services'
                        />
                         <CardItem 
                        src="images/img-2.jpg"
                        text="Travel to had deep inside the Amasson Jungle"
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/img-3.jpg"
                        text="Explorer the hiden woterfall deep inside the Amasson Jungle"
                        label='Mystery'
                        path='/services'
                        />
                         <CardItem 
                        src="images/img-4.jpg"
                        text="Travel to had deep inside the Amasson Jungle"
                        label='Adventure'
                        path='/products'
                        />
                          <CardItem 
                        src="images/img-8.jpg"
                        text="Travel to had deep inside the Amasson Jungle"
                        label='Adrenalin'
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Cards;