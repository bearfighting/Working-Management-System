import React from 'react';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';

export default function SearchTache() {

    return (
        <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Rechercher</Button>
            </Form>
        </Navbar.Collapse>
    )
}
