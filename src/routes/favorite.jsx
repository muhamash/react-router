/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";

export default function Favorite({contact}) {

  let favorite = contact.favorite;
    return (
        <Form method="post">
            <button
                style={ {
                    width: 'fit-content',
                    backgroundColor: `${favorite} ? green : red`,
                } }
                name="favorite"
                value={ favorite ? "false" : "true" }
                aria-label={
                    favorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                }
            >
                { favorite ? "★" : "☆" }
            </button>
        </Form>
    );
}
