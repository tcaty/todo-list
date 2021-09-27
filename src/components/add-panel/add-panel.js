import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addTodoItem } from '../../actions';

import './add-panel.css';

const AddPanel = ({ addTodoItem }) => {

  const handleSubmit = useCallback(({ label }) => {
    addTodoItem(label);
  }, [addTodoItem])

  return (
    <Form onSubmit={handleSubmit}>
      {
        ({ handleSubmit, form: { reset }}) => (
          <form className="add-panel" onSubmit={event => {
            handleSubmit(event);
            reset();
          }}>
            <Field name="label">
              {
                ({ input }) => (
                  <input type="text" autoComplete="off" {...input}/>
                )
              }
            </Field>
            <button>Add!</button>
          </form>
        )
      }
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoItem: (label) => dispatch(addTodoItem(label))
  }
}

AddPanel.propTypes = { 
  addTodoItem: PropTypes.func
}

export default connect(null, mapDispatchToProps)(AddPanel);