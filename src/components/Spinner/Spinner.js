import React from 'react'
import { Oval } from 'react-loader-spinner';
import useStyle from './styles'


const Spinner = () => {
    const classes = useStyle()

    return (
        <div className={classes.spinner}>
            <Oval
                height={80}
                width={80}
                color="white"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="black"
                strokeWidth={2}
                strokeWidthSecondary={2}


            />
        </div>
    )
}

export default Spinner