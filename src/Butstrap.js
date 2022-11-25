import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FloatingLabel} from "react-bootstrap";


function Butstrap() {
    return(
        <div>
            <Form>
                <fieldset disabled>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
                        <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                        <Form.Select id="disabledSelect">
                            <option>Disabled select</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id="disabledFieldsetCheck"
                            label="Can't check this"
                        />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </fieldset>
            </Form>
            <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
            >
                <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>
        </div>
    )
}

export {Butstrap}