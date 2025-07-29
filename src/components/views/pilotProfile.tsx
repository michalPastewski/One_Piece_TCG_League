'use client';

import { pilotProfileUpdate } from '@/services/clerk/_actions';
import { useUser } from '@clerk/nextjs';
import { Pen, X } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { PageWrapper } from '../ui/pageWrapper';

export const PilotProfile = () => {
  const { user } = useUser();
  const userData = useMemo(() => user?.publicMetadata || {}, [user]);
  const [isActive, setIsActive] = useState(false);
  const [pilotInfo, setPilotInfo] = useState({ userData });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const res = await pilotProfileUpdate(pilotInfo);
      if (res?.message) {
        setIsActive(false);
        await user?.reload();
      }
      if (res?.error) {
        console.error('Error during profile updating:', res?.error);
      }
    } catch (error) {
      console.error('Error during profile updating::', error);
    }
  };

  useEffect(() => {
    setPilotInfo(userData);
  }, [userData]);

  return (
    <PageWrapper label="Pilot Zone">
      <form onSubmit={handleSubmit}>
        <FormField
          title="Pilot Information"
          activeForm={setIsActive}
          isActive={isActive}>
          <FormItem
            title="UserName"
            value={pilotInfo.name}
            id="username"
            placeholder="Username"
            isActive={isActive}
            handleOnChange={(e) =>
              setPilotInfo({ ...pilotInfo, name: e.target.value })
            }
            required
          />
          <FormItem
            title="BandaiTCG"
            value={pilotInfo.bandaiTCG}
            id="bandai"
            placeholder="BandaiTCG+number"
            isActive={isActive}
            handleOnChange={(e) =>
              setPilotInfo({ ...pilotInfo, bandaiTCG: e.target.value })
            }
            required
          />
          <FormItem
            title="Discord Name"
            value={pilotInfo.discordName}
            id="discordName"
            placeholder="Discord Name"
            isActive={isActive}
            handleOnChange={(e) =>
              setPilotInfo({ ...pilotInfo, discordName: e.target.value })
            }
            required
          />
          <FormItem
            title="City"
            value={pilotInfo.city}
            id="city"
            placeholder="Your city"
            isActive={isActive}
            handleOnChange={(e) =>
              setPilotInfo({ ...pilotInfo, city: e.target.value })
            }
          />
        </FormField>
        {/* <FormField title="Game Set">
          <FormItem title="Leader" id="leader" placeholder="Your leader card" />
          <FormItem title="Cards Deck" id="deck" placeholder="Your deck" />
        </FormField> */}
        {isActive && (
          <div className="flex items-center justify-end gap-4 mt-4">
            <Button
              className="hover:text-secondary bg-accent-light"
              type="submit">
              Submit
            </Button>
          </div>
        )}
      </form>
    </PageWrapper>
  );
};

type FormItemProps = {
  title: string;
  id: string;
  placeholder: string;
  description?: string;
  required?: boolean;
  value?: string;
  isActive: boolean;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: Record<string, string>;
};
function FormItem({
  title,
  id,
  placeholder,
  description,
  required,
  value,
  isActive = false,
  handleOnChange,
  errors,
}: FormItemProps) {
  return (
    <>
      <Label htmlFor={id} className="p-2 mt-2">
        {required && <span className="text-error">*</span>}
        {title}
      </Label>
      {isActive ? (
        <div>
          <Input
            id={id}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={handleOnChange}
          />
          {errors?.[id] && <p className="text-error">{errors[id]}</p>}
          {description && <p>{description}</p>}
        </div>
      ) : (
        <div className="file:text-text dark:bg-input/30 border-border flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none md:text-sm">
          {value}
        </div>
      )}
    </>
  );
}

type FormFieldProps = {
  title: string;
  children: React.ReactNode;
  activeForm: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
};

function FormField({ title, children, activeForm, isActive }: FormFieldProps) {
  return (
    <fieldset className="relative px-4 pb-4 border rounded-lg">
      <legend className="p-2">{title}</legend>
      {isActive ? (
        <X
          className="absolute top-0 right-[3%] p-2 self-end w-10 h-8 hover:bg-secondary rounded-md"
          onClick={() => activeForm(false)}
        />
      ) : (
        <Pen
          onClick={() => activeForm(true)}
          className="absolute top-0 right-[3%] p-2 self-end w-10 h-8 hover:bg-secondary rounded-md"
        />
      )}

      {children}
    </fieldset>
  );
}
