import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin hasFriend={true} ring={ring}>Sohon</Cousin>
                <Cousin>Shonjimoni</Cousin>
            </section>
        </div>
    );
};

export default Aunty;