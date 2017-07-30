import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.getPhotos(+e.target.textContent)
    }
    render() {
        const { year, photos, fetching, error } = this.props
        const years = [2016, 2015, 2014]
        return (
            <div className='page'>
                <p>
                    { years.map((item, id) => <button className='btn mr-20' key={id} onClick={::this.onYearBtnClick}>{item}</button>) }
                </p>
                <h3>{year} год</h3>
                <div className='photo-block'>
                    {error ? <p className='error'>Во время загрузки фото произошла ошибка</p> : ''}
                    {
                        fetching ?
                        <p>Загрузка...</p>
                        :
                        photos.map((entry, id) =>
                            <div key={id} className='photo ib'>
                                <p><img src={entry.src} alt=''/></p>
                                <p>{entry.likes.count} ❤</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    // error: PropTypes.string.isRequired
}