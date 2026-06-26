import React, { useContext, useRef, useState } from 'react'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct';
import ProductZoomContent from '../Component/ProductZoomContent/ProductZoomContent';
import { useParams } from 'react-router-dom';
import { ContextReview } from '../Context/ContextReview';
import { ContextToast } from '../Context/ContextToast';
import { ContextUser } from '../Context/ContextUser';

const ProductDetails = () => {
    const { currentUser } = useContext(ContextUser);
    const { reviews, addReview } = useContext(ContextReview);
    const { openToast } = useContext(ContextToast);
    const [activeTab, setActiveTab] = useState(0);
    const { id } = useParams();
    const inputRef = useRef();
    const [reviewData, setReviewData] = useState({
        text: '',
        rate: ''
    });
    const handleChange = (e) => {
        setReviewData({ ...reviewData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (reviewData.text === '') {
            openToast('error', 'review is required ');
            return;
        }
        addReview(reviewData.text, reviewData.rate);
        console.log(inputRef);
    }

    return (
        <div className='py-5 pb-0 bg-white'>
            <div className="container flex gap-4">
                <ProductZoomContent />
            </div>
            <div className='container pt-10'>
                <div className='flex items-center gap-4 mb-2'>
                    <span className={`text-[13px] sm:text-[18px] hover:text-primary cursor-pointer ${activeTab === 0 ? 'text-primary' : ''}`} onClick={() => setActiveTab(0)}>Description</span>
                    <span className={`text-[13px] sm:text-[18px] hover:text-primary cursor-pointer ${activeTab === 1 ? 'text-primary' : ''}`} onClick={() => setActiveTab(1)}>Reviews (18)</span>
                </div>
                {
                    activeTab === 0 ? <div className='shadow-md w-[300px] sm:w-[500px] md:w-[600px] xl:w-full  py-5 px-8 border-[1px] border-solid border-[rgba(0,0,0,0.1)] rounded-lg'>
                        <p className='text-[11px] sm:text-[15px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div> :
                        <div>
                            <div className='shadow-md p-6 rounded-md w-[100%] sm:w-[80%]'>
                                <h2 className='text-[12px] sm:text-[18px] mb-[30px]'>Customer questions & answers</h2>
                                <div className='overflow-y-scroll h-[400px]'>
                                    <div className='w-full'>

                                        {
                                            reviews && reviews.map((review, index) => {
                                                return (
                                                    <div key={index} className='item border-b-[1px] py-[20px] flex justify-between items-center'>
                                                        <div className='flex gap-3 items-center'>
                                                            <div className='w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] rounded-full overflow-hidden'>
                                                                <img src={'https://res.cloudinary.com/dbggryeo1/image/upload/v1782412711/user_pvwi6t.png'} alt="" className='w-full' />
                                                            </div>
                                                            <div className='flex flex-col'>
                                                                <h2 className='text-[12px]'>{currentUser?.name}</h2>
                                                                <span className='text-[12px]'>2025-03-29</span>
                                                                <span className='text-[12px]'>{review.text}</span>
                                                            </div>
                                                        </div>
                                                        <div className='pr-4'>
                                                            <Rating className='!text-[14px] sm:!text-[20px]' name="half-rating-read" defaultValue={3} precision={1} readOnly />
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }

                                    </div>
                                </div>
                                <div className='mt-5 p-5 bg-[#fafafa] rounded-lg'>
                                    <form action="">
                                        <h3 className='text-[15px] sm:text-[20px] mb-4'>Add a review</h3>
                                        <TextField
                                            sx={{
                                                '& input': {
                                                    fontSize: '12px'
                                                }
                                                ,
                                                '& .MuiInputLabel-root': {
                                                    fontSize: '12px',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: '12px',
                                                    opacity: 1,
                                                },
                                            }}
                                            ref={inputRef} fullWidth onChange={handleChange} name='text' label="write a review" id="fullWidth" className='!border-[rgba(0,0,0,0.5)] !mb-4' />
                                        <Rating defaultValue={3} precision={1} name='rate' readOnly className='!mb-5 !text-[16px] sm:!text-[20px]' />
                                        <br />
                                        <Button onClick={handleSubmit} variant="contained" className=' !text-white !uppercase !bg-primary !px-4 sm:!px-5 !border-primary hover:!bg-black transition hover:!border-black !text-[13px]'>
                                            submit  review
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                }
                <RelatedProduct id={id} />
            </div>
        </div>
    )
}

export default ProductDetails