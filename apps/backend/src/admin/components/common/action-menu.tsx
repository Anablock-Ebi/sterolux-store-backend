import { DropdownMenu, IconButton, clx } from "@medusajs/ui";

import { EllipsisHorizontal } from "@medusajs/icons";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
// @ts-ignore - RouterContext might not be exported, but we can access it
import { UNSAFE_RouterContext } from "react-router-dom";

// Safe Link component that handles Router context issues
const SafeLink = ({ to, children, ...props }: { to: string; children: React.ReactNode; [key: string]: any }) => {
  // Check if we're in Router context
  let routerContext = null;
  try {
    routerContext = useContext(UNSAFE_RouterContext);
  } catch (error) {
    routerContext = null;
  }

  if (routerContext) {
    return <Link to={to} {...props}>{children}</Link>;
  } else {
    // Fallback to regular anchor if Router context is not available
    return (
      <a 
        href={to}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (typeof window !== 'undefined') {
            window.location.href = to;
          }
        }}
        {...props}
      >
        {children}
      </a>
    );
  }
};

export type Action = {
  icon: ReactNode;
  label: string;
  disabled?: boolean;
} & (
  | {
      to: string;
      onClick?: never;
    }
  | {
      onClick: () => void;
      to?: never;
    }
);

export type ActionGroup = {
  actions: Action[];
};

type ActionMenuProps = {
  groups: ActionGroup[];
};

export const ActionMenu = ({ groups }: ActionMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <IconButton size="small" variant="transparent">
          <EllipsisHorizontal />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {groups.map((group, index) => {
          if (!group.actions.length) {
            return null;
          }

          const isLast = index === groups.length - 1;

          return (
            <DropdownMenu.Group key={index}>
              {group.actions.map((action, index) => {
                if (action.onClick) {
                  return (
                    <DropdownMenu.Item
                      disabled={action.disabled}
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        action.onClick();
                      }}
                      className={clx(
                        "[&_svg]:text-ui-fg-subtle flex items-center gap-x-2",
                        {
                          "[&_svg]:text-ui-fg-disabled": action.disabled,
                        }
                      )}
                    >
                      {action.icon}
                      <span>{action.label}</span>
                    </DropdownMenu.Item>
                  );
                }

                return (
                  <div key={index}>
                    <DropdownMenu.Item
                      className={clx(
                        "[&_svg]:text-ui-fg-subtle flex items-center gap-x-2",
                        {
                          "[&_svg]:text-ui-fg-disabled": action.disabled,
                        }
                      )}
                      asChild
                      disabled={action.disabled}
                    >
                      <SafeLink to={action.to} onClick={(e) => e.stopPropagation()}>
                        {action.icon}
                        <span>{action.label}</span>
                      </SafeLink>
                    </DropdownMenu.Item>
                  </div>
                );
              })}
              {!isLast && <DropdownMenu.Separator />}
            </DropdownMenu.Group>
          );
        })}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
