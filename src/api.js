const endpoint = 'https://api-admin-dev.azurewebsites.net/api/';
const api = {
    Category: {
        url: `${endpoint}search/categories`,
        method: "GET"
    },
    Songs: {
        url: `${endpoint}song/search`,
        method: "GET"
    },
    Signup: {
        url: `${endpoint}connect/signup`,
        method: "POST"
    },
    Login: {
        url: `${endpoint}connect/token`,
        method: "POST"
    },
    TokenLogin:{
        url: `${endpoint}connect/signinwithtoken`,
        method: "POST"
    },
    FacebookAuth:{
        url: `${endpoint}connect/token/facebook`,
        method: "POST"
    },
    Reset: {
        url: `${endpoint}connect/reset`,
        method: "POST"
    },
    ResetPassword: {
        url: `${endpoint}profile/resetpassword`,
        method: "PUT"
    },
    User: {
        Get: {
            url: `${endpoint}profile/`,
            method: "GET"
        },
        Set:{
            url: `${endpoint}profile/`,
            method: "PUT"
        },
        AddFavorite:{
            url: `${endpoint}profile/`,
            method: "POST"
        },
        RemoveFavorite:{
            url: `${endpoint}profile/`,
            method: "DELETE"
        },
        UploadImg:{
            url: `${endpoint}trackowner/uploadimage`,
            method: "POST"
        }
    },

    Contact:{
        url: `${endpoint}contact`,
        method: "PUT"
    },
    Song:{
        url: `${endpoint}song/`,
        method: "GET"
    },
    Product:{
        GetTracks:{
            url: `${endpoint}product/gettracks`,
            method: "GET"
        },
        GetTrack:{
            url: `${endpoint}product/gettrack/`,
            method: "GET"
        },
        GetSales:{
            url: `${endpoint}product/getsales/`,
            method: "GET"
        },
        UploadSong:{
            url: `${endpoint}product/uploadfile`,
            method: "POST"
        },
        UpdateSong:{
            url: `${endpoint}product/updatetrack`,
            method: "PUT"
        },
        UpdateVisibility:{
            url: `${endpoint}Product/updatevisibility`,
            method: "PUT"
        },
        ConfirmUpload:{
            url: `${endpoint}product/confirmfileupload/`,
            method: "POST"
        },
        GetDownload:{
            url: `${endpoint}profile/`,
            method: "GET"
        }
    },
    Cart:{
        Get:{
            url: `${endpoint}cart/`,
            method: "GET"
        },
        Add:{
            url: `${endpoint}cart`,
            method: "PUT"
        },
        Remove:{
            url: `${endpoint}cart`,
            method: "DELETE"
        },
        Check:{
            url: `${endpoint}cart/`,
            method: "GET"
        },
        doCheckout:{
            url: `${endpoint}checkout/DoCheckout`,
            method: "PUT"
        },
        completeCheckout:{
            url: `${endpoint}checkoutresult/complete/`,
            method: "GET"
        }
    },
    Applicant:{
        Request:{
            url: `${endpoint}product/uploadapplicantsongs`,
            method: "POST"
        },
        Confirm:{
              url: `${endpoint}product/confirmapplicantsongs`,
            method: "POST"
        },
    },
    Coupon:{
        Add:{
            url: `${endpoint}cart/coupon`,
            method: "POST"
        },
        Remove:{
            url: `${endpoint}cart/coupon/`,
            method: "DELETE"
        },
    },
    MailChimp:{
        url: `${endpoint}MailSubscription`,
        method: "POST"
    },
    TrackOwner:{
        url: `${endpoint}TrackOwner/`,
        method: "GET"
    },
    Verify:{
        url: `${endpoint}profile/verify?request=`,
        method: "GET"
    },
    VendorSubscription:{
        url: `${endpoint}VendorSubsription/`,
        method: "POST"
    }
}
export default api;
