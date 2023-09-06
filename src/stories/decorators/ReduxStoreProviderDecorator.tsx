import {store} from "../../state/store";
import React from 'react'
import { Provider } from 'react-redux';

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => {
    return <Provider store={store}>{storyFn()}</Provider>
}