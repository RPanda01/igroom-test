import { useEffect, useState } from 'react'
import '../css/ProfileCard.css'
import profileMock from '../mock/otherProfile.json'

export default function OtherProfile() {
    const [data, setData] = useState(null)

    useEffect(() => {
        setData(profileMock.page)
    }, [])

    if (!data) return <div>Загрузка...</div>

    const nickname = data.middle?.[0]?.group?.[0]?.label?.text || ''
    const date = data.middle?.[0]?.group?.[1]?.label?.text || ''
    const days = data.middle?.[1]?.group?.[0]?.label?.text || ''
    const meets = data.middle?.[1]?.group?.[1]?.label?.text || ''
    const rumers = data.middle?.[1]?.group?.[2]?.label?.text || ''
    const city = data.middle?.[2]?.group?.[0]?.label?.text || ''
    const callAction = data.middle?.[2]?.group?.[1]?.label?.text || ''
    const tagIcon = data.middle?.[3]?.group?.[0]?.label?.icon || ''
    const blacklistAction = data.middle?.[4]?.group?.[0]?.label?.text || ''

    return (
        <div className="profile-card">
            <div className="profile-header">
                <img src="/icons/back.svg" alt="Назад" className="icon-button" />
            </div>

            <div className="profile-main">
                <div className="avatar-wrapper" style={{ margin: '0 auto 12px' }}>
                    <img className="avatar" src={data.image} alt="Аватар" />
                </div>

                <div className="user-info" style={{ textAlign: 'center' }}>
                    <div className="user-role">румер: <strong>{data.title}</strong></div>
                    <div className="user-meta">
                        <span className="user-nick">{nickname}</span>
                        <span className="user-date">{date}</span>
                    </div>
                </div>

                <div className="user-stats">
                    <div className="stat-item">
                        <strong>{days}</strong>
                        <span>в игре</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <strong>{meets}</strong>
                        <span>встреч</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <strong>{rumers}</strong>
                        <span>румеров</span>
                    </div>
                </div>

                <div className="city-combined">
                    <div className="city-left">{city}</div>
                    <div className="city-room">
                        <span>{callAction}</span>
                    </div>
                </div>

                <div className="tag-block">
                    <img src={`/icons/${tagIcon}`} alt="иконка" className="tag-icon" />
                    <span>todo</span>
                </div>

                <div className="tag-block">
                    <img src="/icons/blacklistSquare.svg" alt="чс" className="tag-icon" />
                    <span style={{ paddingBottom: '2px' }}>
                        {blacklistAction || 'Поместить в черный список'}
                    </span>
                </div>

            </div>
        </div>
    )
}
