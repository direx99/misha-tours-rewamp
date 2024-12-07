import React, { useState, useEffect } from "react";
import { analytics, db } from "../firebase-config.js";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { logEvent } from "firebase/analytics";

function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", review: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reviewsCollectionRef = collection(db, "reviews");

  logEvent(analytics, "section_scroll", {
    section_name: "Reviews",
  });

  // Fetch reviews from Firebase
  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getDocs(reviewsCollectionRef);
      setReviews(
        data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    };
    fetchReviews();
  }, []);

  // Handle form submission
  const handleAddReview = async (e) => {
    logEvent(analytics, "button_click", {
      section_name: "New review",
    });
    e.preventDefault();
    if (newReview.name.trim() && newReview.review.trim()) {
      await addDoc(reviewsCollectionRef, {
        ...newReview,
        timestamp: serverTimestamp(),
      });
      setNewReview({ name: "", review: "" });
      setIsModalOpen(false); // Close modal after submitting
      alert("Review added successfully!");
      logEvent(analytics, "click_action", {
        section_name: "New review added",
      });
    } else {
      alert("Please fill in all fields!");
    }
  };

  // Toggle expanded state of the review
  const toggleReviewExpand = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, expanded: !review.expanded } : review
      )
    );
  };

  return (
    <section id="reviews" className="reviews-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Customer Reviews</h2>

        {/* Display Reviews */}
        <div className="row reviews-list mb-4">
          {reviews.length > 0 ? (
            reviews.map(({ id, name, review, timestamp, expanded }) => (
              <div className="col-md-4 mb-4" key={id}>
                <div
                  className={`review-item p-3 bg-light rounded h-100 ${
                    expanded ? "expanded" : ""
                  }`}
                >
                  <h5 className="mb-2">{name}</h5>
                  <p>{review}</p>
                  <small className="text-muted">
                    {timestamp
                      ? new Date(timestamp.seconds * 1000).toLocaleDateString()
                      : "Just now"}
                  </small>
                  {/* Button to toggle the review expansion */}
                  <button
                    className="read-more-btn"
                    onClick={() => toggleReviewExpand(id)}
                  >
                    {expanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">
              No reviews yet. Be the first to leave one!
            </p>
          )}
        </div>

        {/* Button to open modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary"
        >
          Add Review
        </button>

        {/* Add Review Modal */}
        {isModalOpen && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Your Review</h5>
                  <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleAddReview}>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={newReview.name}
                        onChange={(e) =>
                          setNewReview({ ...newReview, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="review">Your Review</label>
                      <textarea
                        id="review"
                        className="form-control"
                        value={newReview.review}
                        onChange={(e) =>
                          setNewReview({ ...newReview, review: e.target.value })
                        }
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ReviewsSection;
