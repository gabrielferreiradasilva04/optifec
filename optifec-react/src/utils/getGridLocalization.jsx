
export const getGridLocalization = (gridTranslations, coreTranslations) => ({
  components: {
    MuiDataGrid: {
      defaultProps: {
        localeText: {
          ...gridTranslations,
          MuiTablePagination:
            coreTranslations?.components?.MuiTablePagination?.defaultProps ||
            {},
        },
      },
    },
  },
});
