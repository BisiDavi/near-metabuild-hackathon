import { useState } from 'react';

import Button from '@/components/Button';
import RatingStar from '@/components/RatingStar';

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [ratings, setRatings] = useState(0);

  return (
    <form>
      <h4>
        How was the template during usage, Rate this template and give us a
        feedback to earn 0.1 NEAR
      </h4>
      <RatingStar ratings={ratings} setRatings={setRatings} />
      <textarea
        value={feedback}
        placeholder="we will love to hear your feedback"
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>
      <Button type="submit" text="Submit" className="" onClick={() => null} />
    </form>
  );
}
