const FeedbackButton = ({ setFeedback, feedbackType }) => {

  return (
    <>
      <button onClick={() => setFeedback(prev => prev + 1)}>{feedbackType}</button>
    </>
  )
}

export default FeedbackButton