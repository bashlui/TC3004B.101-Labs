import { useFetch } from './useFetch';
import { Loading } from '../../components/Loading';
import { Card } from '../../components/Card';
import { useState } from 'react';

export const CustomHook = () => {

    const [counter, setCounter] = useState(1);
    const { data, isLoading } = useFetch(
        `https://rickandmortyapi.com/api/character/${counter}`
    )

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter > 1 ? counter - 1 : 1);

    return (
        <>
            <h1>Rick and Morty Characters</h1>
            <hr/>
                        {isLoading ? <Loading/>
                                : (<Card id={data?.id} name={data?.name} sprites={[data?.image]} />)}

                        <div className="controls">
                            <button className='btn btn-primary' onClick={decrement} aria-label="previous">Anterior</button>
                            <button className='btn btn-primary' onClick={increment} aria-label="next">Siguiente</button>
                        </div>
        </>
    )
}
