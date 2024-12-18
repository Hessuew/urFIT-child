import React, { useState, useEffect } from 'react';
import type { FC } from 'react';

interface FilterContainerProps {
  options: string[] | string[][];
  allLabels: string[];
  showSearch?: boolean;
  gridId?: string;
  targetId?: string;
}

const ReactFilterContainer: FC<FilterContainerProps> = ({ options, allLabels, showSearch = true, gridId, targetId }) => {
  const [filters, setFilters] = useState({
    type: 'all',
    category: 'all',
    search: '',
  });

  const buttonGroups = Array.isArray(options[0]) ? options : [options];
  const labels = Array.isArray(allLabels) ? allLabels : [allLabels];

  const applyFilters = () => {
    const targetContainer = targetId ? document.getElementById(targetId) : document;
    if (!targetContainer) return;

    const itemCards = targetContainer.querySelectorAll('.item-card');
    const searchTerm = filters.search.toLowerCase();

    itemCards.forEach((card) => {
      const cardType = card.getAttribute('data-type');
      const cardCategory = card.getAttribute('data-category');

      const typeMatch = filters.type === 'all' || cardType === filters.type;
      const categoryMatch = filters.category === 'all' || cardCategory === filters.category;
      const cardContent = card.textContent?.toLowerCase() || '';
      const searchMatch = !searchTerm || cardContent.includes(searchTerm);

      card.classList.toggle('hidden', !searchMatch || !typeMatch || !categoryMatch);
    });

    // Hide empty year sections
    targetContainer.querySelectorAll('.item-year-card').forEach((yearSection) => {
      const hasVisibleCards = yearSection.querySelectorAll('.item-card:not(.hidden)').length > 0;
      yearSection.classList.toggle('hidden', !hasVisibleCards);
    });
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleFilterClick = (filterType: 'type' | 'category', value: string) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, search: event.target.value }));
  };

  const buttonClass = 'rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap';
  const getHoverClass = (variant: 'type' | 'category') =>
    variant === 'type' ? 'hover:bg-blue-100 dark:hover:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-800';

  return (
    <div className="w-full" data-filter-root>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap-reverse items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="relative">
              <div className="overflow-x-auto hide-scrollbar" data-scroll-container>
                <div className="flex gap-2 min-w-max px-2" data-filter-buttons data-variant="type">
                  <button
                    type="button"
                    className={`${buttonClass} ${getHoverClass('type')} ${
                      filters.type === 'all'
                        ? 'bg-blue-500 text-white dark:bg-blue-600'
                        : 'bg-white dark:bg-gray-800'
                    }`}
                    onClick={() => handleFilterClick('type', 'all')}
                    data-filter="all"
                    data-filter-type="type"
                    data-selected={filters.type === 'all'}
                    aria-pressed={filters.type === 'all'}
                  >
                    {labels[0]}
                  </button>
                  {buttonGroups[0]?.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`${buttonClass} ${getHoverClass('type')} ${
                        filters.type === option
                          ? 'bg-blue-500 text-white dark:bg-blue-600'
                          : 'bg-white dark:bg-gray-800'
                      }`}
                      onClick={() => handleFilterClick('type', option)}
                      data-filter={option}
                      data-filter-type="type"
                      data-selected={filters.type === option}
                      aria-pressed={filters.type === option}
                      role="tab"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {showSearch && (
            <div className="w-full md:w-auto md:min-w-[300px]">
              <div className="relative">
                <input
                  id={gridId ? `${gridId}-quick-filter` : 'search-input'}
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                  placeholder="Search..."
                  value={filters.search}
                  onChange={handleSearch}
                  data-search-input
                />
              </div>
            </div>
          )}
        </div>
        {buttonGroups[1] && (
          <div className="w-full">
            <div className="relative">
              <div className="overflow-x-auto hide-scrollbar" data-scroll-container>
                <div className="flex gap-2 min-w-max px-2" data-filter-buttons data-variant="category">
                  <button
                    type="button"
                    className={`${buttonClass} ${getHoverClass('category')} ${
                      filters.category === 'all'
                        ? 'bg-gray-200 dark:bg-gray-700'
                        : 'bg-white dark:bg-gray-800'
                    }`}
                    onClick={() => handleFilterClick('category', 'all')}
                    data-filter="all"
                    data-filter-type="category"
                    data-selected={filters.category === 'all'}
                    aria-pressed={filters.category === 'all'}
                  >
                    {labels[1]}
                  </button>
                  {buttonGroups[1]?.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`${buttonClass} ${getHoverClass('category')} ${
                        filters.category === option
                          ? 'bg-gray-200 dark:bg-gray-700'
                          : 'bg-white dark:bg-gray-800'
                      }`}
                      onClick={() => handleFilterClick('category', option)}
                      data-filter={option}
                      data-filter-type="category"
                      data-selected={filters.category === option}
                      aria-pressed={filters.category === option}
                      role="tab"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactFilterContainer;
