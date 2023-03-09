import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from 'redux/transactions/operation';
import SelectDataPicker from 'components/DatePicker/DatePicker';
import { format } from 'date-fns';
import { translateToRus } from 'hooks/useCategory';
import css from './TransactionsForm.module.css';

export const TransactionsForm = () => {
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Transport');
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const onInputChange = event => {
    let { name, value } = event.currentTarget;
    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'amount':
        setAmount(Number(value));
        break;
      case 'category':
        setCategory(value);
        break;
      default:
        break;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const formData = {
      date,
      description,
      category: translateToRus(category),
      amount,
    };
    dispatch(addExpense(formData));
    reset();
  };

  const reset = () => {
    setDate(format(new Date(), 'yyyy-MM-dd'));
    setDescription('');
    setCategory('Transport');
    setAmount(0);
  };

  const getDate = newDate => {
    setDate(format(newDate, 'yyyy-MM-dd'));
  };

  return (
    <form className={css.transactionsForm} onSubmit={onFormSubmit}>
      <SelectDataPicker getDate={getDate} />
      <input
        type="text"
        name="description"
        className={css.transactionsInputProduct}
        value={description}
        onChange={onInputChange}
        required
      />
      <select
        name="category"
        id="category"
        className={css.transactionsProductType}
        onChange={onInputChange}
        required
      >
        <option value="Transport">Transport</option>
        <option value="Products">Products</option>
        <option value="Health">Health</option>
        <option value="Alcohol">Alcohol</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Housing">Housing</option>
        <option value="Technique">Technique</option>
        <option value="Communal, communication">Communal, communication</option>
        <option value="Sports, hobbies">Sports, hobbies</option>
        <option value="Education">Education</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="number"
        name="amount"
        className={css.transactionsInputAmount}
        onChange={onInputChange}
        required
      />
      <button type="submit" className={css.transactionsSubmitBtn}>
        Input
      </button>
      <button type="reset" className={css.transactionsResetBtn}>
        Clear
      </button>
    </form>
  );
};
