import { createElement, Fragment, useEffect, useRef, useState } from 'react';

import type { SearchClient } from 'algoliasearch/lite';
import { autocomplete, AutocompleteOptions } from '@algolia/autocomplete-js';
import { BaseItem } from '@algolia/autocomplete-core';
import {
 useSearchBox
} from 'react-instantsearch-hooks';
import 'instantsearch.css/themes/satellite.css';
import '@algolia/autocomplete-theme-classic';
import { debounce } from '@algolia/autocomplete-shared';

type AutocompleteProps = Partial<AutocompleteOptions<BaseItem>> & {
  searchClient: SearchClient;
  className?: string;
};

type SetInstantSearchUiStateOptions = {
  query: string;
};

function Autocomplete({
  searchClient,
  className,
  ...autocompleteProps
}: AutocompleteProps) {
  const autocompleteContainer = useRef<HTMLDivElement>(null);

  const { query, setQuery } = useSearchBox();

  const [instantSearchUiState, setInstantSearchUiState] =
    useState<SetInstantSearchUiStateOptions>({ query });
  const debouncedSetInstantSearchUiState = debounce(
    setInstantSearchUiState,
    500
  );

  useEffect(() => {
    setQuery(instantSearchUiState.query);
  }, [instantSearchUiState]);


  useEffect(() => {
    if (!autocompleteContainer.current) {
      return;
    }

    const autocompleteInstance = autocomplete({
      ...autocompleteProps,
      container: autocompleteContainer.current,
      initialState: { query },
      onReset() {
        setInstantSearchUiState({ query: '' });
      },
      onSubmit({ state }) {
        setInstantSearchUiState({ query: state.query });
      },
      onStateChange({ prevState, state }) {
        if (prevState.query !== state.query) {
          debouncedSetInstantSearchUiState({
            query: state.query,
          });
        }
      },
      renderer: { createElement, Fragment, render: () => { } },
    });

    return () => autocompleteInstance.destroy();
  }, []);

  return <div className={className} ref={autocompleteContainer} />;


}
