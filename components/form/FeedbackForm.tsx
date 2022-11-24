import { useState } from 'react';

import Button from '@/components/Button';
import RatingStar from '@/components/RatingStar';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    feedback: '',
  });
  const [ratings, setRatings] = useState(0);

  function onChangeHandler(e: any) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmitHandler(e: any) {
    e.peventDefault();
    setFormData((prev) => ({
      ...prev,
      ratings,
    }));
  }

  console.log('formData', formData);

  return (
    <form onSubmit={onSubmitHandler}>
      <h4>
        How was the template during usage, Rate this template and give us a
        feedback to earn 0.1 NEAR
      </h4>
      <RatingStar ratings={ratings} setRatings={setRatings} />
      <textarea
        name="feedback"
        placeholder="we will love to hear your feedback"
        className="my-2 w-full rounded-md border border-gray-800 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
        value={formData.feedback}
        rows={6}
        onChange={onChangeHandler}
      ></textarea>
      <Button
        type="submit"
        text="Submit"
        className="mx-auto my-2 flex rounded bg-green-500 px-4 py-1 text-white hover:bg-green-200"
        onClick={() => null}
      />
    </form>
  );
}
