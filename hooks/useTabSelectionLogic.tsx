import React, { useState } from 'react'
import { ISelectTab, TabsTypes } from '../types';

const INITIAL_TAB: TabsTypes = "All";

const useTabSelectionLogic = (): [TabsTypes, ISelectTab] => {
    const [currentTab, setCurrentTab] = useState<TabsTypes>(INITIAL_TAB);

    const selectTab: ISelectTab = (name:TabsTypes) => {
        setCurrentTab(name)
    }

    return [currentTab, selectTab]
}

export default useTabSelectionLogic
