import React, {
  createContext,
  useState,
  useEffect,
  FC,
  useContext,
} from "react";

interface Theme {
  theme?: String;
  changeTheme?: Function;
  loading?: boolean;
}
export const ThemeContext = createContext<Theme>({});

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider: FC = ({ children }) => {
  const [theme, settheme] = useState<any>();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (
      !localStorage.getItem("theme") &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      settheme("dark");
    } else {
      settheme(localStorage.getItem("theme") || "");
    }
  }, []);

  const changeTheme = (theme: String) => {
    settheme(theme);
  };

  useEffect(() => {
    setloading(false);
    if (localStorage.getItem("theme") !== theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  if (loading) {
    return null;
  } else {
    return (
      <ThemeContext.Provider value={{ theme, changeTheme, loading }}>
        {children}
      </ThemeContext.Provider>
    );
  }
};

export default ThemeContextProvider;
