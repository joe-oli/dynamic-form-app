import React from 'react';

/*
export interface ErrorObject {
    name?: string;
    property?: string;
    message?: string;
    params?: {
        missingProperty?: string;
    };
    stack?: string;
    schemaPath?: string;
}

interface CustomDisplayFormlevelErrorsProps {
    errors: ErrorObject[];
}

export const CustomDisplayFormlevelErrors: React.FC<CustomDisplayFormlevelErrorsProps> = ({ errors }) => {
    console.log('inside CustomDisplayFormlevelErrors::errorsArray:', errors); // Log the error objects

    return (
        <div className="panel panel-danger errors">
            <div className="panel-heading">
                <h3 className="panel-title">Errors</h3>
            </div>
            <ul className="list-group">
                {errors.map((error, i) => {
                    const fieldName = error.property?.split(".")[1];
                    const errorMessage = error.message || JSON.stringify(error);
                    return (
                        <li key={i} className="list-group-item text-danger">
                            {`${fieldName}: ${errorMessage}`}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
*/



//The above approach does NOT work; I tried it, it does not error but my Custom component above does NOT render !
//version 5.x docs suggest below approach; no themeing, with HOC and ErrorList override is required !!
import { ErrorListProps } from "@rjsf/utils";

export const CustomDisplayFormlevelErrors  = ( props: ErrorListProps ) => {
    const {errors} = props;

    // console.log('inside CustomDisplayFormlevelErrors::errorsArray:', errors);

    return (
        <div className="panel panel-danger errors">
            <div className="panel-heading">
                <h3 className="panel-title">Errors</h3>
            </div>
            <ul className="list-group">
                {errors.map((error, i) => {
                    const fieldName = error.property?.split(".")[1];
                    const errorMessage = error.message || JSON.stringify(error);
                    return (
                        <li key={i} className="list-group-item text-danger">
                            {`${fieldName}: ${errorMessage}`}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};


//when importing, do it by Name, no Default:
//import { ErrorObject, CustomDisplayFormlevelErrors } from './CustomDisplayErrors';
