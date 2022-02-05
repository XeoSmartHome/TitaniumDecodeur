import { IntlProvider } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadLocale } from "../Store/Language/actions";
import { selectLocale } from "../Store/Language/selectors";


const LocaleProvider = ({children}) => {

    const locale = useSelector(selectLocale());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadLocale());
    }, [dispatch()]);

    return(
        <IntlProvider locale={locale} >
            {children}
        </IntlProvider>
    )
};


export default LocaleProvider;
