import {React, useRef, useEffect} from 'react'
import demoImg from '../assets/images/demo.jpg'
import './NewsModal.css'

const NewsModal = ({show, article, onClose}) => {

    const ref = useRef()

    useEffect(() => {
        if (show) {
          ref.current?.showModal();
        } else {
          ref.current?.close();
        }
      }, [show]);

    return (
        <dialog
        ref={ref}
        onCancel={onClose}>
            <div className='modal-overlay'>
                <div className="modal-content">

                    <span onClick={onClose} className="close-button">
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                    {article && (
                        <>
                            <img src={article.image} alt={article.title} className="modal-image" />
                            <h2 className="modal-tittle">{article.title}</h2>
                            <p className="modal-source">{article.source.name}</p>
                            <p className="modal-date">
                                {new Date(article.publishedAt).toLocaleString('en-us', {
                                    month:'short',
                                    day:'2-digit',
                                    year:'numeric',
                                    hour:'2-digit',
                                    minute:'2-digit'})}
                                </p>
                            <p className="modal-content-text">{article.content}</p>
                            <a href={article.url} target='_blank' rel='noopener noreferrer' className="read-more-link">Read More</a>
                        </>
                    )}
                
                </div>
            </div>
        </dialog>
  )
}

export default NewsModal