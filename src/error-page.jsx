import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    
  console.error(error);

    return (
        <div id="error-page">
            <h1>Oops! Router Not Found!!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>this is me generated a new:{ error.statusText || error.message }</i>
            </p>
        </div>
    );
}