import { Form } from "react-router-dom";
import Favorite from './favorite';

const Contact = () =>
{
    const contact = {
        first: "Muhammad Ashraful",
        last: "Alam",
        avatar: "/public/photo.jpg",
        twitter: "twitter acc",
        notes: "Some notes and some quotes",
        favorite: true,
    };

    return (
        <div
            style={ {
                display: 'flex',
                alignItems: "center",
                gap: '50px'
            }}
            id="contact">
            <div>
                <img
                    style={ {
                        width: '200px'
                    }}
                    key={ contact.avatar }
                    src={ contact.avatar || null }
                />
            </div>

            <div>
                <h1
                    style={{
                        
                    }}
                >
                    { contact.first || contact.last ? (
                        <>
                            { contact.first } { contact.last }
                        </>
                    ) : (
                        <i>No Name</i>
                    ) }{ " " }
                    <Favorite contact={ contact } />
                </h1>

                { contact.twitter && (
                    <p>
                        <a
                            target="_blank"
                            href={ `https://twitter.com/${contact.twitter}` }
                        >
                            { contact.twitter }
                        </a>
                    </p>
                ) }

                { contact.notes && <p>{ contact.notes }</p> }

                <div style={ {
                    display: 'flex',
                    gap: '30px'
                }}>
                    <Form action="edit">
                        <button type="submit">Edit</button>
                    </Form>
                    <Form
                        method="post"
                        action="destroy"
                        onSubmit={ ( event ) =>
                        {
                            if (
                                !confirm(
                                    "Please confirm you want to delete this record."
                                )
                            )
                            {
                                event.preventDefault();
                            }
                        } }
                    >
                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;