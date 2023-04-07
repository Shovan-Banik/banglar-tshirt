import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Father = ({ring}) => {
    const [money]=useContext(MoneyContext);
    return (
        <div>
            <h2>Father</h2>
            <p><small>grandpa's money: {money}</small></p>
            <section className='flex'>
                <Myself ring={ring}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;