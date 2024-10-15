import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * 
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const cardStyle = {
    backgroundColor: '#f0f0f0'
};

const cardImage = {
    width: '235px',
    height: '185px',
    padding: '5px'
};

const resList = [
    {
        "info": {
            "id": "282745",
            "name": "Kai Ruchi",
            "cloudinaryImageId": "rlyn8gaytmdb1ynfwukc",
            "locality": "Belathur",
            "areaName": "Whitefield",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian"
            ],
            "avgRating": 3.7,
            "parentId": "113504",
            "avgRatingString": "3.7",
            "totalRatingsString": "137",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-22 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹1499",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d8ba4184-0c74-40a4-9499-0ac56770ae00"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/kai-ruchi-belathur-whitefield-rest282745",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "322270",
            "name": "Andhra Gunpowder",
            "cloudinaryImageId": "oj8lzml52o2zjfa8jptp",
            "locality": "Byrappa Layout",
            "areaName": "Whitefield",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Andhra",
                "Biryani",
                "South Indian"
            ],
            "avgRating": 4.3,
            "parentId": "10496",
            "avgRatingString": "4.3",
            "totalRatingsString": "9.4K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Andhra.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Andhra.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d8ba4184-0c74-40a4-9499-0ac56770ae00"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/andhra-gunpowder-byrappa-layout-whitefield-rest322270",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "231392",
            "name": "Chinese Chaska",
            "cloudinaryImageId": "hfliyqu5fawvdcdcy6dg",
            "locality": "Ak Gopalan Colony Road",
            "areaName": "Whitefield",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Chinese",
                "Biryani",
                "Indian",
                "Tandoor",
                "Arabian",
                "Punjabi",
                "Sweets",
                "Andhra",
                "Snacks",
                "Fast Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "5152",
            "avgRatingString": "4.1",
            "totalRatingsString": "3.6K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 03:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d8ba4184-0c74-40a4-9499-0ac56770ae00"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/chinese-chaska-ak-gopalan-colony-road-whitefield-rest231392",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "214654",
            "name": "Polar Bear",
            "cloudinaryImageId": "57262fe3839f0bff174f3d7e7cc8a2b4",
            "locality": "Brooke Bond First Cross",
            "areaName": "Whitefield",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "726",
            "avgRatingString": "4.6",
            "totalRatingsString": "5.7K+",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹1499",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d8ba4184-0c74-40a4-9499-0ac56770ae00"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/polar-bear-brooke-bond-first-cross-whitefield-rest214654",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "600278",
            "name": "Dilli Chaat",
            "cloudinaryImageId": "8bf23725a0ed7cb07868e97f1d792927",
            "locality": "Ambedkar Naga",
            "areaName": "Whitefield",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Chaat",
                "Snacks",
                "Street Food",
                "North Indian",
                "Beverages",
                "Desserts",
                "Sweets",
                "Indian",
                "Punjabi"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "290409",
            "avgRatingString": "4.2",
            "totalRatingsString": "1.5K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d8ba4184-0c74-40a4-9499-0ac56770ae00"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/dilli-chaat-ambedkar-naga-whitefield-rest600278",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "566012",
            "name": "CakeZone Patisserie",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/a3309efa-25e0-496b-a106-af3a9777c74e_566012.jpg",
            "locality": "VARTHUR HOBLI",
            "areaName": "Ramagondanahalli",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Sweets",
                "Ice Cream"
            ],
            "avgRating": 4.5,
            "parentId": "7003",
            "avgRatingString": "4.5",
            "totalRatingsString": "2.2K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d8ba4184-0c74-40a4-9499-0ac56770ae00"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/cakezone-patisserie-varthur-hobli-ramagondanahalli-rest566012",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "702864",
            "name": "TrueCakes - Fresh | Eggless | Cakes",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/8/9cd4c0fe-5a04-43a5-8b1d-b4ebebb77cc8_702864.jpg",
            "locality": "Vijayanagar",
            "areaName": "Whitefield",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "465380",
            "avgRatingString": "4.5",
            "totalRatingsString": "1.0K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d8ba4184-0c74-40a4-9499-0ac56770ae00"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/truecakes-fresh-eggless-cakes-vijayanagar-whitefield-rest702864",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "369783",
            "name": "Anand Sweets & Savouries",
            "cloudinaryImageId": "8d786951646dc137f9bf859727f90391",
            "locality": "Tulasi Theater Road",
            "areaName": "Marathahalli",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Sweets",
                "Desserts",
                "Snacks"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "53",
            "avgRatingString": "4.7",
            "totalRatingsString": "6.1K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 9.2,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "9.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹1499",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-d8ba4184-0c74-40a4-9499-0ac56770ae00"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/anand-sweets-and-savouries-tulasi-theater-road-marathahalli-rest369783",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "573190",
            "name": "Olio - The Wood Fired Pizzeria",
            "cloudinaryImageId": "rcx9e6cavubzanxczxsh",
            "locality": "Varthur Main Road",
            "areaName": "Whitefield",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Italian"
            ],
            "avgRating": 4.4,
            "parentId": "11633",
            "avgRatingString": "4.4",
            "totalRatingsString": "2.5K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 05:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-varthur-main-road-whitefield-rest573190",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "211189",
            "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/29/a203d1cc-6431-483f-9db7-9ba4ff192663_211189.jpg",
            "locality": "Whitefield Main Road",
            "areaName": "Whitefield",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Beverages",
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "5655",
            "avgRatingString": "4.2",
            "totalRatingsString": "2.0K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "2.9",
                    "ratingCount": "59"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/frozen-bottle-milkshakes-desserts-and-ice-cream-main-road-whitefield-rest211189",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "450664",
            "name": "Chaayos Chai+Snacks=Relax",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_450664.JPG",
            "locality": "Whitefield",
            "areaName": "Whitefield",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Bakery",
                "Beverages",
                "Chaat",
                "Desserts",
                "Home Food",
                "Italian",
                "Maharashtrian",
                "Snacks",
                "Street Food",
                "Sweets"
            ],
            "avgRating": 4.5,
            "parentId": "281782",
            "avgRatingString": "4.5",
            "totalRatingsString": "3.0K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 6.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "6.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                        "description": "Delivery!"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "703"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-whitefield-rest450664",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "352941",
            "name": "Chicking",
            "cloudinaryImageId": "uyvxjq9aoppo7qzpzatl",
            "locality": "Thubarahalli",
            "areaName": "Whitefield",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Fast Food",
                "American",
                "Snacks",
                "Grill",
                "Pizzas",
                "Mexican",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "251",
            "avgRatingString": "4.3",
            "totalRatingsString": "4.4K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹1499",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/chicking-thubarahalli-whitefield-rest352941",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "246773",
            "name": "Mad Over Donuts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/20/21dcba59-3196-4d36-9008-5c1632aad9ae_246773.jpg",
            "locality": "Whitefield",
            "areaName": "Whitefield",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Sweets",
                "Bakery"
            ],
            "avgRating": 4.4,
            "parentId": "611",
            "avgRatingString": "4.4",
            "totalRatingsString": "1.7K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.2",
                    "ratingCount": "27"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/mad-over-donuts-whitefield-rest246773",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "285116",
            "name": "Dindigul Thalappakatti",
            "cloudinaryImageId": "qcoeeteu67eei7wlomdp",
            "locality": "Whitefield",
            "areaName": "Whitefield",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Biryani",
                "Barbecue",
                "South Indian",
                "Chinese",
                "North Indian"
            ],
            "avgRating": 4.2,
            "parentId": "332",
            "avgRatingString": "4.2",
            "totalRatingsString": "6.6K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 9.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "9.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹199"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.4",
                    "ratingCount": "281"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/dindigul-thalappakatti-whitefield-rest285116",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "309676",
            "name": "The Red Box",
            "cloudinaryImageId": "r5y3o4uvzmlnkq30d2cd",
            "locality": "Marathahalli",
            "areaName": "Marathahalli",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Chinese",
                "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "1636",
            "avgRatingString": "4.1",
            "totalRatingsString": "2.5K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 7.2,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "7.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.8",
                    "ratingCount": "49"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/the-red-box-marathahalli-rest309676",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "927479",
            "name": "Nandhana Palace",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/7/43a4b799-9e5a-4bb9-ac40-6c63bac1d5c5_927479.jpg",
            "locality": "VARTHUR MAIN ROAD",
            "areaName": "Whitefield",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Andhra",
                "Biryani"
            ],
            "avgRating": 4.3,
            "parentId": "2120",
            "avgRatingString": "4.3",
            "totalRatingsString": "571",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "6.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹1499",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/nandhana-palace-varthur-main-road-whitefield-rest927479",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "103789",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/20/252f1530-8759-4cd2-b990-6c480609d2cd_103789.JPG",
            "locality": "Ramagondanahalli",
            "areaName": "Whitefield",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream"
            ],
            "avgRating": 4.3,
            "parentId": "195515",
            "avgRatingString": "4.3",
            "totalRatingsString": "3.8K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 4.8,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "4.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/starbucks-coffee-ramagondanahalli-whitefield-rest103789",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "360",
            "name": "Beijing Bites",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/25/30fa9e0b-bfe8-439f-b648-78987ceade91_360.jpg",
            "locality": "Whitefield",
            "areaName": "Whitefield",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Chinese",
                "Thai"
            ],
            "avgRating": 4.1,
            "parentId": "103",
            "avgRatingString": "4.1",
            "totalRatingsString": "26K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 6.2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "6.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Chinese.png",
                        "description": "Delivery!"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹599",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.7",
                    "ratingCount": "441"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/beijing-bites-whitefield-rest360",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "457828",
            "name": "Istah - The Mediterranean Way",
            "cloudinaryImageId": "9a01f2935fcb5ae05426db8264062102",
            "locality": "1st Phase",
            "areaName": "Whitefield",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Mediterranean",
                "Biryani",
                "Snacks",
                "Grill",
                "Kebabs",
                "Arabian",
                "Lebanese",
                "Beverages",
                "Desserts",
                "Italian",
                "Turkish"
            ],
            "avgRating": 4.4,
            "parentId": "3518",
            "avgRatingString": "4.4",
            "totalRatingsString": "6.9K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Rolls.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                        "description": "OnlyOnSwiggy"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Rolls.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "OnlyOnSwiggy",
                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/istah-the-mediterranean-way-1st-phase-whitefield-rest457828",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "577060",
            "name": "EatFit",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/6/2be7e26d-cf2e-4c9b-91de-20063e4104e2_577060.jpg",
            "locality": "Prashanth Extension",
            "areaName": "Whitefield",
            "costForTwo": "₹270 for two",
            "cuisines": [
                "Chinese",
                "Healthy Food",
                "Tandoor",
                "Pizzas",
                "North Indian",
                "Thalis",
                "Biryani"
            ],
            "avgRating": 4.3,
            "parentId": "76139",
            "avgRatingString": "4.3",
            "totalRatingsString": "4.0K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/eatfit-prashanth-extension-whitefield-rest577060",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "561754",
            "name": "Aroma's Hyderabad House",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/21/f615c134-d9b3-4801-8162-821d6ca4984f_561754.jpg",
            "locality": "Marathahalli",
            "areaName": "Marathahalli",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Hyderabadi",
                "Mughlai",
                "Chinese"
            ],
            "avgRating": 4.3,
            "parentId": "71",
            "avgRatingString": "4.3",
            "totalRatingsString": "4.5K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 10.3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "10.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "2.4K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/aromas-hyderabad-house-marathahalli-rest561754",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "34364",
            "name": "Firangi Bake",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/e13beda0-b19e-4a10-b003-cd84aac85001_34364.jpg",
            "locality": "Lakshminarayana Pura",
            "areaName": "Chinnapanna Halli",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Mexican",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "3952",
            "avgRatingString": "4.2",
            "totalRatingsString": "1.4K+",
            "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 7.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "7.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 03:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹449",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/firangi-bake-lakshminarayana-pura-chinnapanna-halli-rest34364",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "686329",
            "name": "Haldiram's Restaurant",
            "cloudinaryImageId": "1abb89624b491497c8cff182d95ac457",
            "locality": "Garudacharpaly Whitefield Main Road",
            "areaName": "Mahadevpura",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Biryani",
                "Chinese",
                "Chaat",
                "Thalis",
                "Bakery",
                "Sweets",
                "Beverages",
                "Desserts",
                "Snacks",
                "Continental",
                "Momos",
                "Pastas",
                "Burgers"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "351771",
            "avgRatingString": "4.3",
            "totalRatingsString": "4.9K+",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 9.7,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "9.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-16 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Meals.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Meals.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3382bea1-49e6-42c4-9d80-a2fdf83b4d75"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/haldirams-restaurant-garudacharpaly-whitefield-main-road-mahadevpura-rest686329",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
];

const RestaurantCard = (props) => {
    const { info } = props?.resItem;
    const imageSrc = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`;
    return (
        <div className='res-card' style={cardStyle}>
            <img alt='card-image' style={cardImage}
                src={imageSrc} />
            <h3>{info.name}</h3>
            <h4>{info.cuisines.join(', ')}</h4>
            <h4>{info.avgRating} stars</h4>
            <h4>{info.sla.deliveryTime} minutes</h4>
            <h4>{info.costForTwo}</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {
                    resList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resItem={restaurant} />)
                }
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
