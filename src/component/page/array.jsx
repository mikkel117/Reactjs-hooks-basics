import React from 'react';


const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

export default function Array(){
    return(
        <div>
            {names.map(name => 
                <p>
                    {name}
                </p>
                )}
        </div>
    )
}