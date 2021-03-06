import React from 'react'
import { useStaticQuery, graphql } from 'gatsby-image'

export default function HitsHero() {
    return (
        <>
        <div className="hits_hero">
            <div className="hits_hero-wrap">
            </div>
        </div>

        <div className="hits_desc">
            <div className="hits_desc-item">
                <div className="hits_desc-item_txt">
                    <span>
                        Ответьте - Вам важно знать, сколько времени занимает прогрев принтера до печати первой страницы?
                        А объём встроенной в принтер памяти? Уверены, что нет.
                    </span>
                </div>
            </div>
            <div className="hits_desc-item">
                <div className="hits_desc-item_txt">
                    <span>
                        Опираясь на более, чем 10-ти летний опыт работы на рынке печатающих устройств и регулярно отвечая на
                        вопрос <strong>«Какой принтер посоветуете приобрести?»</strong>, мы составили этот Рейтинг.
                        Рейтинг с учётом действительных потребностей пользователя в зависимости от задачи. Мы будем регулярно
                        обновлять Рейтинг.
                    </span>
                </div>
            </div>
            <div className="hits_desc-item">
                <div className="hits_desc-item_txt">
                    <span>
                        Наш выбор субъективен и он может не совпадать с Вашим.
                        Если у Вас есть собственный вариант устройства для описанных целей или Вы хотите задать вопрос -
                        пришлите его нам на адрес hitparade@xn--80aairftm.ru
                    </span>
                </div>
            </div>
        </div>

        <div className="hits_recs">
            <div className="hits_recs-item">
                <div className="hits_recs-item_inner">
                    <span>Для получения нашей рекомендации по типу принтера, пожалуйста выберите место установки и необходимое
                        вам количество цветов</span>
                </div>
            </div>

            <div className="hits_recs-item">
                <div className="hits_recs-item_inner hits_recs-row">
                    <div className="hits_recs-item_inner-item">
                        <span>домой</span>
                    </div>
                    <div className="hits_recs-item_inner-item">
                        <span>в офис</span>
                    </div>
                    <div className="hits_recs-item_inner-item">
                        <span>на склад</span>
                    </div>
                </div>

                <div className="hits_recs-item_inner hits_recs-row second-hits_recs-row">
                    <div className="hits_recs-item_inner-item">
                        <span>черно-белый</span>
                    </div>
                    <div className="hits_recs-item_inner-item">
                        <span>цветной</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="hits-recs-content">
            <div className="hits-recs-content_item">
                <div className="hits-recs-content_item-inner">
                    <span className="hits-recs-content_item-inner-heading">
                        Что важно при выборе цветного принтера для дома?
                    </span>
                    <span className="hits-recs-content_item-inner-txt">
                        Если Вам нужно печатать фотографии - выбор за струйным принтером. Но помните - он требует регулярной
                        печати. Иначе есть вероятность столкнуться с заменой засохшей печатной головы. А это половина стоимости
                        принтера!
                        Если Вы печатаете не фотографии, а отчёты с красивыми графиками и презентации - выбор за лазерным
                        принтером - ничего не засохнет и напечатает он больше!
                    </span>
                </div>
            </div>

            <div className="hits-recs-content_item">
                <div className="hits-recs-content_item-inner">
                    <span className="hits-recs-content_item-inner-heading">
                        Основные параметры выбора цветного принтера для дома:
                    </span>
                    <span className="hits-recs-content_item-inner-txt">
                        - Wi-Fi - можно поставить его где удобно, не тянуть провода и печатать с любого устройства
                        - это МФУ - чтоб иметь возможность что то отсканировать или сделать копию
                    </span>
                </div>
            </div>
        </div>

        <div className="hits-items">
            <div className="hits-items_column">
                <div className="hits-items_column-item">
                    <div className="hits-items_column-item-heading">
                        Наш
                    </div>
                    <div className="hits-items_column-item-heading-strong">
                        выбор
                    </div>
                </div>

                <div className="hits-items_column-item">
                    <div className="hits-items_column-item-image">
                    </div>
                </div>

                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        Цветность печати
                    </span>
                </div>

                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        Технология печати
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        Размещение
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        Область применения
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        Максимальный формат
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        Автоматическая двусторонняя печать
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        Печать фотографий
                    </span>
                </div>

                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        Количество цветов
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        Печать без полей
                    </span>
                </div>

                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        Максимальное разрешение для ч/б печати
                    </span>
                </div>
            </div>



            <div className="hits-items_column">
                <div className="hits-items_column-item">
                    <div className="hits-items_column-item-heading-small">
                        Лазерный для презентаций
                    </div>
                    <div className="hits-items_column-item-heading-big">
                        МФУ Canon i-SENSYS MF641Cw
                    </div>
                </div>

                <div className="hits-items_column-item">
                    <div className="hits-items_column-item-image">
                        <img src={'/hits/hits_printer.svg'} alt="Hits"/>
                    </div>
                </div>

                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        лазерная
                    </span>
                </div>

                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        настольный
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        малый офис/дом
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        A4
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        есть
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        нет
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        4
                    </span>
                </div>

                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        есть
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        Печать без полей
                    </span>
                </div>

                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        1200/1200 dpi
                    </span>
                </div>
            </div>

            <div className="hits-items_column">
                <div className="hits-items_column-item">
                    <div className="hits-items_column-item-heading-small">
                        Струйный для фотографий
                    </div>
                    <div className="hits-items_column-item-heading-big">
                        МФУ Canon PIXMA TS5040
                    </div>
                </div>

                <div className="hits-items_column-item">
                    <div className="hits-items_column-item-image">
                        <img src={'/hits/hits_printer2.svg'} alt="Hits" />
                    </div>
                </div>

                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        цветная
                    </span>
                </div>

                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        пьезоэлектрическая струйная
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        настольный
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        персональный
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        A4
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        есть
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        есть
                    </span>
                </div>

                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        4
                    </span>
                </div>
                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        есть
                    </span>
                </div>

                <div className="hits-items_column-item">
                    <span className="hits-items_column-item-text">
                        4800x1200 dpi
                    </span>
                </div>
            </div>
        </div>

        <div className="hits_offers">
            <div className="hits_offers-wrap">
                <div className="hits_offers-wrap_heading">

                    <div className="hits_offers-wrap_heading-item">
                        <div className="hits_offers-wrap_heading-item_head">
                            <span>
                                Наше <span className="blue">предложение</span> по картриджам
                            </span>
                        </div>

                        <div className="hits_offers-wrap_heading-item_btns">
                            <div className="hits_offers-wrap_heading-item_btns-item">
                                <span>струйные</span>
                            </div>
                            <div className="hits_offers-wrap_heading-item_btns-item">
                                <span>лазерные</span>
                            </div>
                        </div>
                    </div>

                    <div className="hits_offers-wrap_item">
                        <div className="hits_offers-wrap_inner">
                            <div className="hits_offers-wrap_inner-item">
                                <div className="hits_offers-wrap_inner-item_image">
                                </div>
                            </div>
                            <div className="hits_offers-wrap_inner-item">
                                <div className="hits_offers-wrap_inner-item_heading">
                                    <span>СОВМЕСТИМАЯ ТУБА С ТОНЕРОМ ZVK TK-570K (АНАЛОГ KYOCERA TK-570K) (BLACK)</span>
                                </div>
                                <div className="hits_offers-wrap_inner-item_props">
                                    <div className="hits_offers-wrap_inner-item_props-item">
                                        <span>Бренд</span>
                                        <span>Производитель</span>
                                        <span>Артикул</span>
                                        <span>Модель</span>
                                        <span>Цвет печати картриджа</span>
                                        <span>Тип картриджа</span>
                                        <span>Совместимость с аппаратами</span>
                                    </div>
                                    <div className="hits_offers-wrap_inner-item_props-item">
                                        <span>KYOCERA</span>
                                        <span>ZVK</span>
                                        <span>K-ZVK</span>
                                        <span>TK-570K-ZVK</span>
                                        <span>Black</span>
                                        <span>Тонер-картридж/Туба с тонером</span>
                                        <span>ECOSYS P7035cdn, FS-C5400dn</span>
                                    </div>
                                </div>


                                <div className="hits_offers-wrap_item-actions">
                                    <div className="hits_offers-wrap_item-actions-price">
                                        <span>456738</span>
                                    </div>
                
                                    <div className="hits_offers-wrap_item-actions-amount">
                                        <div className="hits_offers-wrap_item-actions-amount-label">
                                            <span>количество</span>
                                        </div>
                                    </div>
                
                                    <div className="hits_offers-wrap_item-actions-cta">
                                        <div className="hits_offers-wrap_item-actions-cta_item">В корзину</div>
                                    </div>
                
                                    <div className="hits_offers-wrap_item-actions-about">
                                        <div className="hits_offers-wrap_item-actions-about-item">подробнее</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="hits_offers-wrap_item">
                        <div className="hits_offers-wrap_inner">
                            <div className="hits_offers-wrap_inner-item">
                                <div className="hits_offers-wrap_inner-item_image">
                                </div>
                            </div>
                            <div className="hits_offers-wrap_inner-item">
                                <div className="hits_offers-wrap_inner-item_heading">
                                    <span>СОВМЕСТИМАЯ ТУБА С ТОНЕРОМ ZVK TK-570K (АНАЛОГ KYOCERA TK-570K) (BLACK)</span>
                                </div>
                                <div className="hits_offers-wrap_inner-item_props">
                                    <div className="hits_offers-wrap_inner-item_props-item">
                                        <span>Бренд</span>
                                        <span>Производитель</span>
                                        <span>Артикул</span>
                                        <span>Модель</span>
                                        <span>Цвет печати картриджа</span>
                                        <span>Тип картриджа</span>
                                        <span>Совместимость с аппаратами</span>
                                    </div>
                                    <div className="hits_offers-wrap_inner-item_props-item">
                                        <span>KYOCERA</span>
                                        <span>ZVK</span>
                                        <span>K-ZVK</span>
                                        <span>TK-570K-ZVK</span>
                                        <span>Black</span>
                                        <span>Тонер-картридж/Туба с тонером</span>
                                        <span>ECOSYS P7035cdn, FS-C5400dn</span>
                                    </div>
                                </div>


                                <div className="hits_offers-wrap_item-actions">
                                    <div className="hits_offers-wrap_item-actions-price">
                                        <span>456738</span>
                                    </div>
                
                                    <div className="hits_offers-wrap_item-actions-amount">
                                        <div className="hits_offers-wrap_item-actions-amount-label">
                                            <span>количество</span>
                                        </div>
                                    </div>
                
                                    <div className="hits_offers-wrap_item-actions-cta">
                                        <div className="hits_offers-wrap_item-actions-cta_item">В корзину</div>
                                    </div>
                
                                    <div className="hits_offers-wrap_item-actions-about">
                                        <div className="hits_offers-wrap_item-actions-about-item">подробнее</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="hits_offers-wrap_item">
                        <div className="hits_offers-wrap_inner">
                            <div className="hits_offers-wrap_inner-item">
                                <div className="hits_offers-wrap_inner-item_image">
                                </div>
                            </div>
                            <div className="hits_offers-wrap_inner-item">
                                <div className="hits_offers-wrap_inner-item_heading">
                                    <span>СОВМЕСТИМАЯ ТУБА С ТОНЕРОМ ZVK TK-570K (АНАЛОГ KYOCERA TK-570K) (BLACK)</span>
                                </div>
                                <div className="hits_offers-wrap_inner-item_props">
                                    <div className="hits_offers-wrap_inner-item_props-item">
                                        <span>Бренд</span>
                                        <span>Производитель</span>
                                        <span>Артикул</span>
                                        <span>Модель</span>
                                        <span>Цвет печати картриджа</span>
                                        <span>Тип картриджа</span>
                                        <span>Совместимость с аппаратами</span>
                                    </div>
                                    <div className="hits_offers-wrap_inner-item_props-item">
                                        <span>KYOCERA</span>
                                        <span>ZVK</span>
                                        <span>K-ZVK</span>
                                        <span>TK-570K-ZVK</span>
                                        <span>Black</span>
                                        <span>Тонер-картридж/Туба с тонером</span>
                                        <span>ECOSYS P7035cdn, FS-C5400dn</span>
                                    </div>
                                </div>


                                <div className="hits_offers-wrap_item-actions">
                                    <div className="hits_offers-wrap_item-actions-price">
                                        <span>456738</span>
                                    </div>
                
                                    <div className="hits_offers-wrap_item-actions-amount">
                                        <div className="hits_offers-wrap_item-actions-amount-label">
                                            <span>количество</span>
                                        </div>
                                    </div>
                
                                    <div className="hits_offers-wrap_item-actions-cta">
                                        <div className="hits_offers-wrap_item-actions-cta_item">В корзину</div>
                                    </div>
                
                                    <div className="hits_offers-wrap_item-actions-about">
                                        <div className="hits_offers-wrap_item-actions-about-item">подробнее</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
