import React, { useState } from 'react';
import { GOOGLE_REVIEWS_SUMMARY, REVIEWS_LIST } from '../data/reviewsData';
import { Star, ExternalLink, ThumbsUp, CheckCircle } from 'lucide-react';

export const GoogleReviewsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({
    'rev-seo-subhani': 4,
    'rev-astro': 7,
    'rev-uzma-naseer': 3,
  });
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const [newReviewForm, setNewReviewForm] = useState({ name: '', rating: 5, text: '', location: '' });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const filteredReviews = selectedTag === 'all'
    ? REVIEWS_LIST
    : REVIEWS_LIST.filter(r => r.tags.includes(selectedTag));

  const handleLike = (id: string) => {
    setHelpfulCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleSubmitNewReview = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setSubmittedMessage(false);
      setNewReviewForm({ name: '', rating: 5, text: '', location: '' });
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 bg-[#FAF7F2] text-[#221E1A] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#745633] font-semibold mb-3">
              Google Maps Verified Feedback
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1612]">
              Client Reviews & Recognition
            </h2>
          </div>
          <p className="text-sm text-[#5C5449] max-w-md font-light leading-relaxed">
            Rated 4.6 stars across 31 verified Google reviews for innovative space planning, 
            personalized living spaces, and turnkey architectural delivery in Lahore.
          </p>
        </div>

        {/* Google Ratings Hero Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#E5DFD5] p-6 sm:p-8 rounded-sm mb-12 shadow-xs">
          
          {/* Average Rating Score Block */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[#E5DFD5] pb-6 lg:pb-0 lg:pr-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-[#1A1612] flex items-center justify-center text-white font-bold text-xs">
                G
              </div>
              <span className="text-xs uppercase tracking-wider text-[#6B6254] font-semibold">Google Reviews</span>
            </div>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-serif text-5xl sm:text-6xl text-[#1A1612] font-semibold tabular-nums">
                4.6
              </span>
              <div className="flex flex-col">
                <div className="flex items-center text-[#D97706]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 fill-current ${i === 4 ? 'opacity-60' : ''}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#7A7163] mt-0.5">31 Google reviews</span>
              </div>
            </div>

            <p className="text-xs text-[#6B6254] leading-relaxed mb-4">
              Interior Designer in Lahore | Architects in Lahore | ILHAN'S Interior's
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowReviewModal(true)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#745633] hover:bg-[#5E4426] transition-colors rounded-sm cursor-pointer shadow-xs"
              >
                Write a Review
              </button>
              <a
                href="https://maps.google.com/?q=Zainab+Tower+Model+Town+Link+Rd+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-medium text-[#423C33] hover:text-black bg-[#F5F1E9] border border-[#DDD5C7] transition-colors rounded-sm inline-flex items-center gap-1.5"
              >
                <span>View on Maps</span>
                <ExternalLink className="w-3 h-3 text-[#745633]" />
              </a>
            </div>
          </div>

          {/* Star Distribution Bars */}
          <div className="lg:col-span-8 space-y-2.5">
            {GOOGLE_REVIEWS_SUMMARY.ratingDistribution.map((tier) => (
              <div key={tier.stars} className="flex items-center gap-3 text-xs">
                <span className="w-7 text-right text-[#423C33] font-mono tabular-nums font-medium">
                  {tier.stars} ★
                </span>
                <div className="flex-1 h-2 bg-[#EFEBE3] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#745633] rounded-full"
                    style={{ width: `${tier.percentage}%` }}
                  />
                </div>
                <span className="w-12 text-right text-[#7A7163] font-mono tabular-nums">
                  {tier.count}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Real Review Filter Tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#E5DFD5]">
          <span className="text-xs uppercase tracking-wider text-[#745633] mr-2 shrink-0 font-semibold">
            Keyword Filter:
          </span>
          {GOOGLE_REVIEWS_SUMMARY.filterTags.map((tag) => {
            const isSelected = selectedTag === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all rounded-sm cursor-pointer whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-[#745633] text-[#FAF7F2] border border-[#745633] shadow-xs'
                    : 'bg-white text-[#5C5449] border border-[#DDD5C7] hover:border-[#745633] hover:text-[#1A1612]'
                }`}
              >
                {tag.label} <span className="text-[10px] text-[#8C8275]">({tag.count})</span>
              </button>
            );
          })}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#E5DFD5] p-6 rounded-sm flex flex-col justify-between hover:border-[#745633]/60 transition-all shadow-xs"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#F5F1E9] border border-[#DDD5C7] flex items-center justify-center font-bold text-[#745633] text-sm">
                      {rev.avatarLetter}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1612] leading-tight">
                        {rev.author}
                      </h4>
                      <div className="text-[11px] text-[#7A7163]">
                        {rev.reviewCount || 'Verified Review'}
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] text-[#7A7163] font-mono">
                    {rev.timeAgo}
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center text-[#D97706] mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#4F463B] font-light leading-relaxed mb-4">
                  "{rev.text}"
                </p>

                {/* Owner Reply if present */}
                {rev.ownerReply && (
                  <div className="p-3 bg-[#FAF7F2] border-l-2 border-[#745633] mb-4 rounded-r-sm">
                    <div className="text-[10px] uppercase tracking-wider text-[#745633] font-semibold mb-1">
                      Response from the owner
                    </div>
                    <p className="text-xs text-[#5C5449] font-light italic">
                      "{rev.ownerReply}"
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between text-xs text-[#7A7163]">
                <div className="flex items-center gap-1.5">
                  {rev.tags.map(t => (
                    <span key={t} className="text-[10px] text-[#6B6254] font-medium">
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleLike(rev.id)}
                  className="inline-flex items-center gap-1 text-[11px] text-[#6B6254] hover:text-[#745633] transition-colors cursor-pointer"
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>Helpful ({helpfulCounts[rev.id] || 0})</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {showReviewModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-[#FAF7F2] border border-[#DDD5C7] w-full max-w-lg p-6 sm:p-8 rounded-sm shadow-2xl animate-fadeIn">
            <h3 className="font-serif text-2xl text-[#1A1612] font-semibold mb-1">
              Share Your Experience
            </h3>
            <p className="text-xs text-[#6B6254] mb-6">
              Reviewing ILHAN'S Interior's (Zainab Tower, Model Town Link Rd, Lahore)
            </p>

            {submittedMessage ? (
              <div className="p-6 bg-white border border-[#745633] text-center rounded-sm">
                <CheckCircle className="w-10 h-10 text-[#745633] mx-auto mb-2" />
                <h4 className="text-base font-semibold text-[#1A1612]">Thank You for Your Review!</h4>
                <p className="text-xs text-[#6B6254] mt-1">Your feedback helps fellow Lahore homeowners discover tailored designs.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitNewReview} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#423C33] font-semibold mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newReviewForm.name}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, name: e.target.value })}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full bg-white border border-[#DDD5C7] px-3.5 py-2.5 text-sm text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#423C33] font-semibold mb-1.5">
                    Project Location / Society
                  </label>
                  <input
                    type="text"
                    value={newReviewForm.location}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, location: e.target.value })}
                    placeholder="e.g. DHA Phase 5, Model Town, Gulberg"
                    className="w-full bg-white border border-[#DDD5C7] px-3.5 py-2.5 text-sm text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#423C33] font-semibold mb-1.5">
                    Star Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReviewForm({ ...newReviewForm, rating: star })}
                        className="p-1 cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReviewForm.rating
                              ? 'text-[#D97706] fill-current'
                              : 'text-[#DDD5C7]'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#423C33] font-semibold mb-1.5">
                    Your Feedback & Review Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={newReviewForm.text}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, text: e.target.value })}
                    placeholder="Share how the team handled your tailored interior, space planning, and materials..."
                    className="w-full bg-white border border-[#DDD5C7] px-3.5 py-2.5 text-sm text-[#1A1612] rounded-sm focus:outline-none focus:border-[#745633]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E5DFD5]">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 text-xs uppercase tracking-wider text-[#5C5449] hover:text-[#1A1612] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#745633] hover:bg-[#5E4426] transition-colors rounded-sm cursor-pointer shadow-xs"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
