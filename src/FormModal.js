import React from "react";
import * as Yup from 'yup';
import { ModalHeader, ModalActions, Button, Modal } from 'semantic-ui-react'
import { FormTextArea, FormSelect, FormInput, FormGroup, FormCheckbox, Form, Label,Icon } from 'semantic-ui-react'
import './Card.css'
import { Formik } from 'formik';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const FormModal = () => {
  const [open, setOpen] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false);

  const validateform = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    gender: Yup.string().oneOf(['male', 'female','other'], 'Invalid gender').required('Gender is required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
    checked: Yup.boolean().oneOf([true], 'Must accept terms and conditions')
  });

  const toggleShowPassword = () => {
    setShowPassword(showPassword=>!showPassword);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add User</Button>}
    >
      <ModalHeader>Add User</ModalHeader>
      <div id="form-user">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            description: '',
            gender: '',
            email: '',
            image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            checked: false,
            password:''
          }}
          validationSchema={validateform}
          onSubmit={async (values) => {
            //await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            setOpen(false)
          }}

        >{({
          values,
          errors,
          touched,
          dirty,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup widths='equal'>
              <FormInput id={(errors.firstName && touched.firstName) ? 'error-class' : 'ok-class'} fluid label='First name' name='firstName' placeholder='First name' value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
              {errors.firstName && touched.firstName && <Label basic color='red' pointing>{errors.firstName}</Label>}
              <FormInput id={(errors.lastName && touched.lastName) ? 'error-class' : 'ok-class'} fluid label='Last name' name='lastName' placeholder='Last name' value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
              {errors.lastName && touched.lastName && <Label basic color='red' pointing>{errors.lastName}</Label>}
              <FormSelect id={(errors.gender) ? 'error-class' : 'ok-class'} fluid
                label='Gender'
                name='gender'
                options={options}
                placeholder='Gender'
                onChange={(event, data) => {
                  handleChange({
                    target: {
                      name: data.name,
                      value: data.value
                    }
                  });
                }}
                onBlur={handleBlur}
              />
              {errors.gender && <Label basic color='red' pointing>{errors.gender}</Label>}
            </FormGroup>
            <FormInput id={(errors.email && touched.email) ? 'error-class' : 'ok-class'} fluid label='Email' name='email' placeholder='abcd@gmail.com' value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {errors.email && touched.email && <Label basic color='red' pointing>{errors.email}</Label>}
            <FormTextArea id={(errors.description && touched.description) ? 'error-class' : 'ok-class'} label='About' name='description' value={values.description} placeholder='Tell us more about you...' onChange={handleChange} onBlur={handleBlur} />
            {errors.description && touched.description && <Label basic color='red' pointing>{errors.description}</Label>}
            <Form.Input fluid label='Password' name='password' type={showPassword?'text':'password'} placeholder='Password' value={values.password} onChange={handleChange} onBlur={handleBlur} id={(errors.password && touched.password) ? 'error-class' : 'ok-class'} icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={toggleShowPassword} />} />
            {errors.password && touched.password && <Label basic color='red' pointing>{errors.password}</Label>}
            <Form.Input fluid label='Confirm Password' name='confirmPassword' type={showPassword?'text':'password'} placeholder='Confirm Password' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}id={(errors.confirmPassword && touched.confirmPassword) ? 'error-class' : 'ok-class'} icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={toggleShowPassword} />} />
            {errors.confirmPassword && touched.confirmPassword && <Label basic color='red' pointing>{errors.confirmPassword}</Label>}
            <FormCheckbox id={(errors.checked && touched.checked) ? 'error-class' : 'ok-class'} name='checked' label='I agree to the Terms and Conditions' checked={values.checked} onChange={handleChange} onBlur={handleBlur} />
            {errors.checked && touched.checked && <Label basic color='red' pointing>{errors.checked}</Label>}

            <ModalActions id="add-user" >
              <Button color='black' content="cancel" onClick={() => setOpen(false)}>
              </Button>
              <Button
                type='submit'
                content="Create"
                icon='checkmark'
                labelPosition='right'
                positive>
              </Button>
            </ModalActions>
          </Form>
        )}
        </Formik>
      </div>
    </Modal>
  )
}

export default FormModal;
