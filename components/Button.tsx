export default function Button({
  children,
  className,
  outlined,
  icon,
  onClick,
  disabled,
  small,
  loading,
  non,
  normal,
  danger,
  light,
  styles,
  to,
  rounded,
}: any) {
  const style = ` ${className}  ${
    disabled ? "pointer-events-none opacity-60 text-gray-600" : undefined
  }  ${
    outlined
      ? "border bg-transparent"
      : normal
      ? "bg-gray-50 border border-gray-200 text-gray-500 "
      : danger
      ? "bg-red-500 text-white"
      : light
      ? "bg-white text-gray-800"
      : non
      ? "bg-transparent text-gray-800"
      : "bg-primary text-white"
  }  font-bold  text-[14px] ${rounded ? "rounded-3xl " : "rounded-[4px]"} ${
    loading ? "loading-btn opacity-70" : undefined
  } flex ${
    small && "text-[12.5px] py-[8px] px-[14px]"
  }  py-[8px] text-[14px] px-[24px] hover:bg-opacity-80 items-center font-bold justify-center capitalize  cursor-pointer relative`;
  return (
    <a style={styles} onClick={onClick} className={style}>
      {icon}
      <span className={`${loading ? "invisible" : ""} flex items-center`}>
        {children}
      </span>
    </a>
  );
}
