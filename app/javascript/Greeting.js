import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from './redux/messagesSlice';

const Greeting = () => {
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  return (
    <div>
      <h1>
        <span>Random Greeting: </span>
        <span>{messages}</span>
      </h1>
    </div>
  );
};

export default Greeting;
