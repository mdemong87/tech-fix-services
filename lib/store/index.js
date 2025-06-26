import { create } from 'zustand';


export const useStore = create((set, get) => ({

    //auth user
    authUser: {},
    setauthUser: (text) => set({ authUser: text }),


    searchText: "",  // Define the initial state for searchText
    setSearchText: (text) => set({ searchText: text }),  // Action to update searchText
    userData: false,  // Define the initial state for userData
    setUserData: (user) => set({ userData: user }),  // Action to update userData



    //for shoping cart management
    mycart: [],
    setmycart: (cart) => set({ mycart: cart }),

    //for booking page
    rander: 1,
    setrander: (state) => set({ rander: state }),
    ispersonal: false,
    setispersonal: (state) => set({ ispersonal: state }),
    shootType: "",
    setshootType: (state) => set({ shootType: state }),
    selectedprice: 1,
    setselectedprice: (state) => set({ selectedprice: state }),


    //booking form state
    fristName: "",
    setfristName: (state) => set({ fristName: state }),
    lastName: "",
    setlastName: (state) => set({ lastName: state }),
    companyName: "",
    setcompanyName: (state) => set({ companyName: state }),
    email: "",
    setemail: (state) => set({ email: state }),
    officeNumber: "",
    setofficeNumber: (state) => set({ officeNumber: state }),
    mobileNumber: "",
    setmobileNumber: (state) => set({ mobileNumber: state }),
    assignmentTitle: "",
    setassignmentTitle: (state) => set({ assignmentTitle: state }),
    assignmentDate: "",
    setassignmentDate: (state) => set({ assignmentDate: state }),
    callTime: "",
    setcallTime: (state) => set({ callTime: state }),
    endTime: "",
    setendTime: (state) => set({ endTime: state }),
    vanueName: "",
    setvanueName: (state) => set({ vanueName: state }),
    vanueAddress: "",
    setvanueAddress: (state) => set({ vanueAddress: state }),
    numberOfGuest: "",
    setnumberOfGuest: (state) => set({ numberOfGuest: state }),
    dressAttire: "",
    setdressAttire: (state) => set({ dressAttire: state }),
    onsiteContactNumber: "",
    setonsiteContactNumber: (state) => set({ onsiteContactNumber: state }),
    postImagetopictureTv: true,
    setpostImagetopictureTv: (state) => set({ postImagetopictureTv: state }),
    specialRequest: "",
    setspecialRequest: (state) => set({ specialRequest: state }),
    bookFor: "",
    setbookFor: (state) => set({ bookFor: state }),
    agreeToTerms: false,
    setagreeToTerms: (state) => set({ agreeToTerms: state }),
    subscribe: false,
    setsubscribe: (state) => set({ subscribe: state }),





    resion: "",
    setresion: (state) => set({ resion: state }),
    socialMediaProfile: "",
    setsocialMediaProfile: (state) => set({ socialMediaProfile: state }),
    sessionInteresed: "",
    setsessionInteresed: (state) => set({ sessionInteresed: state }),
    dsccribeLooking: "",
    setdsccribeLooking: (state) => set({ dsccribeLooking: state }),
    hearAbout: "",
    sethearAbout: (state) => set({ hearAbout: state }),



    paymentType: true,
    setpaymentType: (state) => set({ paymentType: state }),
    paymentAmount: 0,
    setpaymentAmount: (state) => set({ paymentAmount: state }),
    paymentVerified: false,
    setpaymentVerified: (state) => set({ paymentVerified: state }),




    picDate: "",
    setpicDate: (state) => set({ picDate: state }),
    picTime: "",
    setpicTime: (state) => set({ picTime: state }),
    recieveSms: false,
    setrecieveSms: (state) => set({ recieveSms: state }),




    fromPage: null,
    setfromPage: (state) => set({ fromPage: state }),







}));
