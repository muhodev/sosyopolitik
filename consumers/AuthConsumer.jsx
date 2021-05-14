import { useEffect } from 'react';
import { useAuth } from 'providers';

export function AuthConsumer(props) {
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  return props.children;
}
