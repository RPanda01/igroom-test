import '../css/ProfileCard.css'

export default function ProfileCard() {
    return (
        <div className="profile-card">
            <div className="profile-header">
                <img src="/icons/back.svg" alt="Назад" className="icon-button" />

            </div>

            <div className="profile-main">
                <div className="avatar-section">
                    <div className="avatar-wrapper">
                        <img
                            className="avatar"
                            src="/avatar.png"
                            alt="Аватар"
                        />
                        <img src="/icons/badgeP.svg" alt="Badge P" className="badge-icon" />
                    </div>

                    <div className="side-icons">
                        <div className="side-icon-item">
                            <img src="/icons/share.svg" alt="Поделиться" className="side-icon" />
                        </div>
                        <div className="side-icon-item">
                            <img src="/icons/meEye.svg" alt="Это я" className="side-icon" />
                            <span>Это я</span>
                        </div>
                        <div className="side-icon-item">
                            <img src="/icons/cotum.svg" alt="Котум" className="side-icon" />
                            <span>Котум</span>
                        </div>
                    </div>
                </div>

                <div className="user-info">
                    <div className="user-role">румер: <strong>Ваня Петькин</strong></div>
                    <div className="user-meta">
                        <span className="user-nick">@nickname</span>
                        <span className="user-date">Вчера 18.00</span>
                    </div>
                </div>

                <div className="user-stats">
                    <div className="stat-item">
                        <strong>1 месяц</strong>
                        <span>в игре</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <strong>15</strong>
                        <span>встреч</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <strong>350</strong>
                        <span>румеров</span>
                    </div>
                </div>

                <div className="city-combined">
                    <div className="city-left">Краснодар</div>
                    <div className="city-edit">
                        <img src="/icons/gear.svg" alt="Редактировать" className="gear-icon" />
                        <span style={{ paddingBottom: '2px' }}>РЕДАКТ</span>
                    </div>
                </div>


                <div className="block-section">
                    <div className="section-header">
                        <img src="/icons/eclipseGreen.svg" className="dot-icon" />
                        <span>ЗОВЫ</span>
                        <span className="badge-count">4</span>
                        <img src="/icons/down.svg" alt="Свернуть" className="down-arrow" />
                    </div>

                    {[
                        { date: "13.04", title: "Название встречи полностью" },
                        { date: "16.04", title: "Название встречи полностью" },
                        { date: "18.04", title: "Название встречи полностью" },
                        { date: "21.04", title: "Название встречи полностью" }
                    ].map((item, i) => (
                        <div className="call-item" key={i}>
                            <div className="avatar-placeholder"></div>
                            <div className="call-content">
                                <div className="call-text">{item.title}</div>
                            </div>
                            <img src="/icons/more.svg" alt="Ещё" className="more-icon" />
                            <div className="call-date">{item.date}</div>
                        </div>
                    ))}

                    <div className="section-header">
                        <img src="/icons/eclipseOrange.svg" className="dot-icon" />
                        <span>ИДУ</span>
                        <span className="badge-count">3</span>
                        <img src="/icons/down.svg" alt="Свернуть" className="down-arrow" />
                    </div>

                    <div className="section-header history-header">
                        <img src="/icons/eclipseGray.svg" className="dot-icon" />
                        <span>ИСТОРИЯ ВСТРЕЧ</span>
                        <span className="badge-count">15</span>
                    </div>
                </div>

                <div className="game-actions">
                    <button className="game-button top-button">СОЗДАТЬ ИГРУМ</button>
                    <button className="game-button bottom-button">
                        МОИ ИГРУМЫ
                        <img src="/icons/right.svg" alt="" className="arrow-icon" />
                    </button>
                </div>


                <div className="profile-list account-list">
                    <div className="list-item">
                        <img src="/icons/eyeOpen.svg" alt="" className="list-icon" />
                        <span>Публичный аккаунт</span>
                    </div>
                    <div className="list-item">
                        <img src="/icons/adult.svg" alt="" className="list-icon" />
                        <span>Взрослый</span>
                    </div>
                </div>

                <div className="profile-list menu-list">
                    <div className="list-item">
                        <img src="/icons/check.svg" alt="" className="list-icon" />
                        <span>Мои подписки</span>
                    </div>
                    <div className="list-item">
                        <img src="/icons/blacklistRound.svg" alt="" className="list-icon" />
                        <span>Чёрный список</span>
                    </div>
                    <div className="list-item">
                        <img src="/icons/bookmarks.svg" alt="" className="list-icon" />
                        <span>Закладки</span>
                    </div>
                </div>

                <div className="description-block">
                    <div className="user-description">
                        Я профессиональный скуф, обожаю сидеть дома и часто играю в Мафию. Съёшь ещё этих французских булочек да выпей чаю. Lorem ipsum gdskglsd
                        <img src="/icons/right.svg" alt="перейти" className="desc-arrow" />
                    </div>
                    <div className="telegram-section">
                        <div className="telegram-label">Мой телеграм</div>
                        <a href="#" className="telegram-link">@nickname</a>
                    </div>
                </div>



                <div className="profile-section">
                    <div className="section-item">
                        <img src="/icons/eclipse22.svg" alt="" className="emoji" />
                        <span>Возможности ИГРУМ</span>
                    </div>
                    <div className="section-item">
                        <img src="/icons/eclipse22.svg" alt="" className="emoji" />
                        <span>Правила ИГРУМ</span>
                    </div>
                    <div className="section-item">
                        <img src="/icons/eclipse22.svg" alt="" className="emoji" />
                        <span>Инструкция РУМЕРА</span>
                    </div>
                    <div className="section-item">
                        <img src="/icons/eclipse22.svg" alt="" className="emoji" />
                        <span>Инструкция МАСТЕРА</span>
                    </div>
                    <div className="section-item">
                        <img src="/icons/eclipse22.svg" alt="" className="emoji" />
                        <span>Инструкция МЕСТА</span>
                    </div>
                    <div className="section-item">
                        <img src="/icons/eclipse22.svg" alt="" className="emoji" />
                        <span>Пользовательское соглашение</span>
                    </div>
                </div>

                <button className="logout-button">
                    <img src="/icons/exit.svg" alt="" className="logout-icon" />
                    Выйти из профиля
                </button>
            </div>
        </div>
    )
}