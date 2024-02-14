"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define variants for each component if needed. For demonstration, using a simple variant for TabsRoot.
const tabsRootVariants = cva(["rounded-lg border bg-card text-card-foreground shadow-sm"], {
    variants: {
        size: {
            small: "w-[400px]", // Specific width for small variant
            large: "w-[800px]", // Specific width for large variant
        },
    }
});

type TabsRootProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> &
    VariantProps<typeof tabsRootVariants>;

const TabsRoot = React.forwardRef<
    HTMLDivElement, 
    TabsRootProps>(({ className, ...props }, ref) => (
    <TabsPrimitive.Root ref={ref} className={cn(tabsRootVariants(), className)} {...props} />
));
TabsRoot.displayName = "TabsRoot";

// For TabsList, TabsTrigger, and TabsContent, you can follow a similar pattern, adjusting the component and prop types as needed.

// TabsList
const TabsList = React.forwardRef<
    HTMLDivElement, 
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(({ className, ...props }, ref) => (
    <TabsPrimitive.List ref={ref} className={cn("shrink-0 flex border-b border-mauve6", className)} {...props} />
));
TabsList.displayName = "TabsList";

// TabsTrigger
const TabsTrigger = React.forwardRef<
    HTMLButtonElement, 
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger ref={ref} 
    className={
        cn(
            "px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md outline-none cursor-default",
            "transition-colors duration-150 ease-in-out", // Transition for smooth color changes
            "hover:bg-primary hover:text-white", // Hover state styles
            // Apply primary background color when tab is active or focused
            "[data-state=active]:bg-primary [data-state=active]:text-white",
            "focus:ring-2 focus:ring-primary focus:outline-none focus:bg-primary focus:text-white", // Focus state styles including background and text color
            className)} {...props} />
));
TabsTrigger.displayName = "TabsTrigger";

// TabsContent
const TabsContent = React.forwardRef<
    HTMLDivElement, 
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content ref={ref} className={cn("grow p-5 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black", className)} {...props} />
));
TabsContent.displayName = "TabsContent";

export { TabsRoot, TabsList, TabsTrigger, TabsContent };
