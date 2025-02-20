useEffect(() => {
  const fetchDispensaries = async () => {
      setLoading(true);
      setError(null);
      try {
          let query = supabase
              .from('dispensaries')
              .select('*')
              .eq('city', selectedCity);

          // Apply filters directly using Supabase's .eq() method
          if (filters.acceptsCreditCards) {
              query = query.eq('Accepts Credit Cards', true);
          }
          if (filters.delivery) {
              query = query.eq('Delivery', true);
          }
          if (filters.openNow) {
             query = query.eq('business_status', 'OPERATIONAL');
          }
          if (filters.flower) {
              query = query.eq('Flower', true);
          }
          // ... add other filters similarly ...
          if (filters.wheelchairAccessibleEntrance) {
              query = query.eq('Wheelchair Accessible Entrance', true);
          }


          const { data, error: fetchError } = await query;

          if (fetchError) {
              throw fetchError;
          }
          setDispensaries(data || []);
      } catch (err:any) {
          setError(err.message || 'Failed to fetch dispensaries.');
      } finally {
          setLoading(false);
      }
  };

  fetchDispensaries();
}, [selectedCity, filters]);