import { useEffect, useMemo } from "react";
import {
    PropertiesActionType,
    PropertiesStateCategoryEnum,
    PropertiesStateElementType,
} from "../../../../../types/properties";
import { InputText, InputTextVarient } from "../../../../atoms/input-text";
import { adjustURL, getURL } from "../../../../../util/linkHelper";

export interface ListExclusivePropsType {
    selected: HTMLElement | null;
    stateData: PropertiesStateElementType;
    dispatch: React.Dispatch<PropertiesActionType>;
}

export const LinkExclusive = ({
    selected,
    stateData,
    dispatch,
}: ListExclusivePropsType) => {
    const { redirectURL } = stateData;

    const { newRedirectURL } = useMemo(() => {
        return {
            newRedirectURL: getURL(selected),
        };
    }, [selected]);

    useEffect(() => {
        dispatchRedirectURL(newRedirectURL);
    }, [newRedirectURL, selected]);

    const dispatchRedirectURL = (value: string) => {
        dispatch({
            category: PropertiesStateCategoryEnum.element,
            value: { redirectURL: value },
        });
    };

    const handleRedirectURLChange = (url: string) => {
        if (selected) {
            selected.setAttribute("href", adjustURL(url));
            dispatchRedirectURL(url);
        }
    };

    return (
        <InputText
            varient={InputTextVarient.nonDraggable}
            title={"Redirect URL"}
            placeholder="www.google.com"
            text={redirectURL}
            onChange={handleRedirectURLChange}
        />
    );
};
