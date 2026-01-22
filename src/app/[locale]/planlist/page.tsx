"use client"
import React ,{useState} from 'react';
import { Check, X } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Recruit Basic',
      badge: 'Active',
      badgeColor: 'bg-yellow-200/80 text-yellow-700',
      price: '$17',
      originalPrice: '$228',
      period: '/ month (USD)',
      billedYearly: 'billed yearly',
      description: 'Get started with essential tools to manage your team efficiently. Ideal for small teams with fundamental needs',
      features: [
        { text: 'Access to core HR features', included: true },
        { text: 'Employee record management', included: true },
        { text: 'Basic reporting tools', included: true },
        { text: 'Manage up to 10 team members', included: true },
        { text: 'Track employee attendance', included: false },
        { text: 'Assign and monitor tasks', included: false },
        { text: 'Email support', included: false },
        { text: 'Simple onboarding process', included: false },
        { text: 'Designed user-focused interfaces, optimized user', included: false },
      ],
      buttonText: 'Cancel',
      buttonStyle: 'bg-white/80 backdrop-blur text-gray-700 hover:bg-white',
      isHighlighted: false,
    },
    {
      name: 'Talent Pro',
      badge: 'Save 27%',
      badgeColor: 'bg-yellow-300 text-gray-800',
      price: '$19',
      originalPrice: '$26',
      period: '/ month (USD)',
      billedYearly: '$228 billed yearly',
      description: 'A comprehensive solution for growing teams, offering enhanced features to streamline HR processes',
      features: [
        { text: 'Access to core HR features', included: true },
        { text: 'Employee record management', included: true },
        { text: 'Basic reporting tools', included: true },
        { text: 'Manage up to 10 team members', included: true },
        { text: 'Track employee attendance', included: true },
        { text: 'Assign and monitor tasks', included: true },
        { text: 'Email support', included: false },
        { text: 'Simple onboarding process', included: false },
        { text: 'Designed user-focused interfaces, optimized user', included: false },
      ],
      buttonText: 'Start 7-days Free Trial',
      buttonStyle: 'bg-white text-gray-800 hover:bg-gray-50',
      isHighlighted: true,
    },
    {
      name: 'HR Master',
      badge: 'Popular',
      badgeColor: 'bg-yellow-200/80 text-yellow-700',
      price: '$34',
      originalPrice: '$408',
      period: '/ month (USD)',
      billedYearly: 'billed yearly',
      description: 'Maximize team performance with premium tools and full customization options, perfect for larger organizations',
      features: [
        { text: 'Access to core HR features', included: true },
        { text: 'Employee record management', included: true },
        { text: 'Basic reporting tools', included: true },
        { text: 'Manage up to 50 team members', included: true },
        { text: 'Track employee attendance', included: true },
        { text: 'Assign and monitor tasks', included: true },
        { text: 'Email support', included: true },
        { text: 'Simple onboarding process', included: true },
        { text: 'Designed user-focused interfaces, optimized user', included: true },
      ],
      buttonText: 'Start 7-days Free Trial',
      buttonStyle: 'bg-white/80 backdrop-blur text-gray-700 hover:bg-white',
      isHighlighted: false,
    },
  ];
  const [billing, setBilling] = useState("annual");
  return (
    <div className=" min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-3 items-center mb-12">
      {/* Left */}
      <h1 className="text-4xl font text-gray-700">Pricing</h1>

      {/* Center Toggle */}
      <div className="flex justify-center">
  <div className="relative flex w-fit bg-white/60 backdrop-blur-md rounded-full p-1 shadow-sm">
    
    {/* Sliding background */}
    <span
      className={`absolute top-1 bottom-1 w-[48%] rounded-full bg-gray-800 transition-all duration-300 ease-out
        ${billing === "monthly" ? "translate-x-full" : "translate-x-0"}
      `}
    />

    {/* Annual */}
    <button
      onClick={() => setBilling("annual")}
      className={`relative z-10 px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300
        ${billing === "annual" ? "text-white" : "text-gray-600"}
      `}
    >
      Annual
    </button>

    {/* Monthly */}
    <button
      onClick={() => setBilling("monthly")}
      className={`relative z-10 px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300
        ${billing === "monthly" ? "text-white" : "text-gray-600"}
      `}
    >
      Monthly
    </button>
  </div>
</div>


      {/* Right (empty for balance) */}
      <div />
    </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className='bg-black'
               
            >
                <div className="relative border inverted-radius">
              <div
                className={`h-full p-8 ${
                  plan.isHighlighted
                    ? 'bg-[#303030]'
                    : 'bg-white/40 backdrop-blur-xl border border-white/60'
                } shadow-xl`}
              >
                {/* Badge - Top Left */}
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`${plan.badgeColor} px-3 py-1 rounded-md text-xs font-medium inline-block`}
                  >
                    {plan.badge}
                  </span>
                  {!plan.isHighlighted && index === 2 && (
                    <span className="text-xs text-gray-500">●</span>
                  )}
                </div>

                {/* Plan Name */}
                <h2
                  className={`text-xl font-semibold mb-8 ${
                    plan.isHighlighted ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {plan.name}
                </h2>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    {plan.originalPrice && (
                      <span
                        className={`text-xl line-through ${
                          plan.isHighlighted ? 'text-gray-600' : 'text-gray-400'
                        }`}
                      >
                        {plan.originalPrice}
                      </span>
                    )}
                    <span
                      className={`text-5xl font-bold ${
                        plan.isHighlighted ? 'text-yellow-400' : 'text-gray-800'
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-xs ${
                        plan.isHighlighted ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`text-xs ${
                      plan.isHighlighted ? 'text-gray-500' : 'text-gray-500'
                    }`}
                  >
                    {plan.billedYearly}
                  </p>
                </div>

                {/* Description */}
                <p
                  className={`text-xs mb-8 leading-relaxed ${
                    plan.isHighlighted ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {plan.description}
                </p>

                {/* Dotted Divider */}
                <div
                  className={`border-t ${
                    plan.isHighlighted ? 'border-gray-700' : 'border-gray-300'
                  } border-dotted mb-6`}
                ></div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      ) : (
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full ${
                            plan.isHighlighted ? 'bg-gray-700' : 'bg-gray-300'
                          } flex items-center justify-center mt-0.5`}
                        >
                          <X
                            className={`w-3 h-3 ${
                              plan.isHighlighted ? 'text-gray-600' : 'text-gray-500'
                            }`}
                            strokeWidth={2.5}
                          />
                        </div>
                      )}
                      <span
                        className={`text-xs leading-relaxed ${
                          feature.included
                            ? plan.isHighlighted
                              ? 'text-white'
                              : 'text-gray-700'
                            : plan.isHighlighted
                            ? 'text-gray-600'
                            : 'text-gray-400'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  className={`w-full py-3 rounded-full text-sm font-medium transition-all ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>

              {/* Yellow Badge on Dark Card */}
              {plan.isHighlighted && (
                <div className="absolute -top-2 -right-2 bg-yellow-300 text-gray-800 px-4 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-lg">
                  Save 27% ★
                </div>
              )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;