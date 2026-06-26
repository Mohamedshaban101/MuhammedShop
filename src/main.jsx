import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProductPopupProvider from './Context/ContextProductPopup.jsx'
import ContextToastProvidor from './Context/ContextToast.jsx'
import ContextOrderPopupProvider from './Context/ContextOrderPopup.jsx'
import ContextCartProvider from './Context/ContextCart.jsx'
import ContextWishlistProvider from './Context/ContextWishlist.jsx'
import ContextUserProvider from './Context/ContextUser.jsx'
import ContextReviewProvider from './Context/ContextReview.jsx'
import ContextOrderProvider from './Context/ContextOrder.jsx'
import ScrollToTop from './Component/ScrollToTop/ScrollToTop.jsx'
import ContextSlidesPerViewProvider from './Context/ContextSlidesPerView.jsx'
createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ContextToastProvidor>
      <ContextWishlistProvider>
        <ContextCartProvider>
          <ContextOrderPopupProvider>
            <ContextProductPopupProvider>
              <ContextUserProvider>
                <ContextOrderProvider>
                  <ContextReviewProvider>
                    <ContextSlidesPerViewProvider>
                      <ScrollToTop />
                      <App />
                    </ContextSlidesPerViewProvider>
                  </ContextReviewProvider>
                </ContextOrderProvider>
              </ContextUserProvider>
            </ContextProductPopupProvider>
          </ContextOrderPopupProvider>
        </ContextCartProvider>
      </ContextWishlistProvider>
    </ContextToastProvidor>
  </BrowserRouter>
)
