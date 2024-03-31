import PropTypes from 'prop-types'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import CSS from './ContactForm.module.css';

const initialValues = {
    contactName: '',
    number: '',
};

const ContactSchema = Yup.object().shape({
    contactName: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too long!')
        .required('Required'),
    number: Yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

export default function ContactForm({ onAdd }) {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.contactName,
            number: values.number,
        });
        console.log(values);
        actions.resetForm();
    };

    return (
        <div className={CSS.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={ContactSchema}
            >
                <Form className={CSS.form}>
                    <div className={CSS.box}>
                        <label htmlFor={nameFieldId}>Name</label>
                        <Field
                            className={CSS.input}
                            type="text"
                            name="contactName"
                            id={nameFieldId}
                        />
                        <ErrorMessage name="contactName" render={msg => <span className={CSS.error}>{msg}</span>} />
                    </div>
                    <div>
                        <label htmlFor={numberFieldId}>Number</label>
                        <Field
                            className={CSS.input}
                            type="tel"
                            name="number"
                            id={numberFieldId}
                        />
                        <ErrorMessage name='number' render={msg => <span className={CSS.error}>{msg}</span>} />
                    </div>
                    <button className={CSS.btn} type='submit'>Add contact</button>
                </Form>
            </Formik>
        </div>
    );
}
ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired, 
};


