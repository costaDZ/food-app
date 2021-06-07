import React from 'react'
import '../styles/loading.css'

function Loading() {
    return (
        <div className="loader-container">
            {/* <div className="loader">
                <svg className="preloader-icon" width="80" height="80" viewBox="0 0 34 38">
                    <path className="preloader-path" strokeDashoffset="0" d="M29.437 8.114L19.35 2.132c-1.473-.86-3.207-.86-4.68 0L4.153 8.114C2.68 8.974 1.5 10.56 1.5 12.28v11.964c0 1.718 1.22 3.306 2.69 4.165l10.404 5.98c1.47.86 3.362.86 4.834 0l9.97-5.98c1.472-.86 2.102-2.45 2.102-4.168V12.28c0-1.72-.59-3.306-2.063-4.166z"></path>
                </svg>
            </div> */}
            <div className="cart-loader">
                <div className="loader_img1">
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle className="path" cx="50" cy="50" r="20"
                            fill="none" strokeWidth="3" strokeMiterlimit="10" />
                    </svg>
                </div>
            </div>

            {/* <div class="loader seven"></div> */}
        </div>
    )
}

export default Loading
